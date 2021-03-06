import React from "react";
import "materialize-css";
import useRoutes from "./routes";
import { BrowserRouter } from "react-router-dom";
import { useAuth } from "./hooks/auth.hook";
import { AuthContext } from "./context/AuthContext";
import { Navbar } from "./components/Navbar";
import { Loader } from "./components/Loader";

function App() {
  //Get contexxt from authContext
  const { token, login, logout, userId, ready } = useAuth();
  //make boolean isAuth from real token
  const isAuthenticated = !!token;
  //Get routes from routes use isAuth
  const routes = useRoutes(isAuthenticated);
  if (!ready) {
    return <Loader />;
  }
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
        {isAuthenticated && <Navbar />}
        <div className="conteiner">{routes}</div>
      </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;
