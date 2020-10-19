import React, { useContext, useCallback, useEffect, useState } from "react";
import { useHttp } from "../hooks/http.hook";
import { Loader } from "../components/Loader";
import { useMessage } from "../hooks/message.hook";
import { AuthContext } from "../context/AuthContext";
import { ClientsComponent } from "../components/ClientsComponent";

export const ClientsPage = () => {
  const { request, loading, error, clearError } = useHttp();
  const { token } = useContext(AuthContext);
  const message = useMessage();
  //get previos clients
  const initialArray = JSON.parse(localStorage.getItem("clientsArray"));
  //use local state
  const [clientsArray, setClients] = useState(initialArray);
  //Clients download function
  const fetchClients = useCallback(async () => {
    try {
      const fetched = await request(`/api/clients`, "GET", null, {
        Authorization: `Bearer ${token}`,
      });
      setClients(fetched);
      //st clients to LS
      localStorage.setItem("clientsArray", JSON.stringify(fetched));
    } catch (e) {}
  }, [token, request]);
  //UseEffect fo download Clients (like Mount)
  useEffect(() => {
    fetchClients();
  }, [fetchClients]);
  //Error processing
  useEffect(() => {
    message(error);
    clearError();
  }, [error, message, clearError]);
  //Check is loading exist?
  if (!clientsArray || loading) {
    return <Loader />;
  }
  return (
    <div>
      <ClientsComponent clients={clientsArray} />
    </div>
  );
};
