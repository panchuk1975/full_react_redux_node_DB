import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { useHttp } from "../hooks/http.hook";
import { useMessage } from "../hooks/message.hook";

export const AuthPage = () => {
  // use Context for auth
  const auth = useContext(AuthContext);
  // use message hook to show nessages
  const message = useMessage();
  //use http hook
  const { loading, error, request, clearError } = useHttp();
  //local auth state
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  // listen to errors
  useEffect(() => {
    message(error);
    clearError();
  }, [error, message, clearError]);
  // update input fields !!!
  useEffect(() => {
    window.M.updateTextFields();
  }, []);
  // event method
  const changeHandler = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };
  // register request method
  const registerHandler = async () => {
    try {
      //post requrst to login end get user data for auth
      const data = await request("/api/auth/register", "POST", { ...form });
      //console.log("Data", data);
      message(data.message);
    } catch (e) {}
  };
  // login request method
  const loginHandler = async () => {
    try {
      const data = await request("/api/auth/login", "POST", { ...form });
      //console.log("Data", data);
      message(data.message);
      //use Login from authHook for User Authentification
      auth.login(data.token, data.user); // user!!! not userId!!!!
    } catch (e) {}
  };
  return (
    <div className="row">
      <div className="col s6">
        <h1 className="auth-title cyan-text text-darken-2">
          Foras-Lend client base
        </h1>
        <div className="card grey darken-2">
          <div className="card-content white-text">
            <span className="card-title cyan-text text-darken-2">
              Authorithation
            </span>
            <div>
              <div className="input-field">
                <input
                  placeholder="Enter email"
                  id="email"
                  type="text"
                  name="email"
                  onChange={changeHandler}
                />
                <label htmlFor="email">Email</label>
              </div>
              <div className="input-field">
                <input
                  placeholder="Enter password"
                  id="password"
                  type="password"
                  name="password"
                  onChange={changeHandler}
                />
                <label htmlFor="password">Password</label>
              </div>
            </div>
          </div>
          <div className="card-action col s12">
            <button
              className="btn cyan darken-2 col s5"
              onClick={loginHandler}
              disabled={loading}
            >
              Log In
            </button>
            <button
              className="btn grey lighten-1 black-text col s5"
              onClick={registerHandler}
              disabled={loading}
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
