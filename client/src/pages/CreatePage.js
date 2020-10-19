import React, { useContext, useCallback, useEffect, useState } from "react";
import { useHttp } from "../hooks/http.hook";
import { Loader } from "../components/Loader";
import { useMessage } from "../hooks/message.hook";
import { AuthContext } from "../context/AuthContext";
import { CreateClient } from "../components/CreateClient";

export const CreatePage = () => {
  const { request, loading, error, clearError } = useHttp();
  const { token } = useContext(AuthContext);
  const message = useMessage();
  let nextNumber = JSON.parse(localStorage.getItem("nextNumber"));
  //get houl URL
  const paramsString = document.location.href;
  //make client ID from URL
  var addr = new URL(paramsString).pathname;
  let clientId = addr.split("/", 3)[2];
  //use local state
  const [client, setClient] = useState();
  //Clients download function
  const fetchClient = useCallback(async () => {
    try {
      if (clientId) {
        const fetched = await request(`/api/clients/${clientId}`, "GET", null, {
          Authorization: `Bearer ${token}`,
        });
        setClient(fetched);
      } else {
        return null;
      }
    } catch (e) {}
  }, [token, request, clientId]);
  //UseEffect fo download Clients (like Mount)
  useEffect(() => {
    fetchClient();
  }, [fetchClient]);
  //Error processing
  useEffect(() => {
    message(error);
    clearError();
  }, [error, message, clearError]);
  //Check is loading exist?
  if (clientId) {
    if (!client || loading) {
      return <Loader />;
    }
  }
  return (
    <div>
      <CreateClient client={client} nextNumber={nextNumber} />
    </div>
  );
};
