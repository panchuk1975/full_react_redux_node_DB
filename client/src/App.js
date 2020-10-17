import React from "react";
import "materialize-css";
import useRoutes from "./routes";
import { BrowserRouter } from "react-router-dom";
import { useAuth } from "./hooks/auth.hook";
import { AuthContext } from "./context/AuthContext";

function App() {
  // use auth.hook for auth
  const { token, login, logout, userId } = useAuth();
  // is token exists?
  const isAuthenticated = !!token;
  // can we use routes?
  const routes = useRoutes(isAuthenticated);
  return (
    //conttext mast to be Provider
    <AuthContext.Provider
      value={{
        token,
        login,
        logout,
        userId,
        isAuthenticated,
      }}
    >
      <BrowserRouter>
        <div className="conteiner">{routes}</div>
      </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;
