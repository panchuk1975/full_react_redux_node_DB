import React from "react";

export const AuthPage = () => {
  return (
    <div className="row">
      <div className="col s6">
        <h1 className="auth-title cyan-text text-darken-2">Client base</h1>
        <div className="card grey darken-2">
          <div className="card-content white-text">
            <span className="card-title cyan-text text-darken-2">Authorithation</span>
            <div>
              <div className="input-field">
                <input
                  placeholder="Enter email"
                  id="email"
                  type="text"
                  name="email"
                />
                <label htmlFor="email">Email</label>
              </div>
              <div className="input-field">
                <input
                  placeholder="Enter password"
                  id="password"
                  type="password"
                  name="password"
                />
                <label htmlFor="password">Password</label>
              </div>
            </div>
          </div>
          <div className="card-action">
            <button className="btn cyan darken-2">Log In</button>
            <button className="btn grey lighten-1 black-text">Sign Up</button>
          </div>
        </div>
      </div>
    </div>
  );
};
