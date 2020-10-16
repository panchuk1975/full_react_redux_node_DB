import React from "react";
import "materialize-css";
import { Routes }  from "./routes";
import { BrowserRouter } from "react-router-dom";

function App() {
  const routes = Routes(false);
  return (
    <BrowserRouter>
      <div className="conteiner">
        {routes}</div>
    </BrowserRouter>
  );
}

export default App;
