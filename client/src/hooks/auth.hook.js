import { useState, useCallback, useEffect } from "react";

const storageName = "userData";

export const useAuth = () => {
  const [token, setToken] = useState(null);
  const [ready, setReady] = useState(false);
  const [userId, setUserId] = useState(null);

  //write jwt token
  const login = useCallback((jwtToken, id) => {
    setToken(jwtToken);
    setUserId(id);
    //console.log(jwtToken, id)
    localStorage.setItem(
      storageName,
      JSON.stringify({
        userId: id,
        token: jwtToken,
      })
    );
  }, []);

  // clear local storage
  const logout = useCallback(() => {
    setToken(null);
    setUserId(null);
    localStorage.removeItem(storageName);
  }, []);

  //check is jwt exists?
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem(storageName));

    //if exists login to account and ready true
    if (data && data.token) {
      login(data.token, data.userId);
    }
    setReady(true);
  }, [login]);

  return { login, logout, token, userId, ready };
};
