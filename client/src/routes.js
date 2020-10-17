import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { AuthPage } from "./pages/AuthPage";
import { ClientsPage } from "./pages/ClientsPage";
import { CreatePage } from "./pages/CreatePage";
import { DetailPage } from "./pages/DetailPage";
import { ProjectsPage } from "./pages/ProjectsPage";

function useRoutes(isAuth) {
  if (isAuth) {
    return (
      <Switch>
        <Route path="/create" exact>
          <CreatePage />
        </Route>
        <Route path="/clients" exact>
          <ClientsPage />
        </Route>
        <Route path="/projects" exact>
          <ProjectsPage />
        </Route>
        <Route path="/detail/:id">
          <DetailPage />
        </Route>
        <Redirect to="/create" />
      </Switch>
    );
  }
  return (
    <Switch>
      <Route path="/" exact>
        <AuthPage />
      </Route>
      <Redirect to="/" />
    </Switch>
  );
}

export default useRoutes;
