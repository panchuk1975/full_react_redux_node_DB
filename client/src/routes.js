import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { AuthPage } from "./pages/AuthPage";
import { ClientsPage } from "./pages/ClientsPage";
import { CreatePage } from "./pages/CreatePage";
import { DetailPage } from "./pages/DetailPage";
import { ProjectsPage } from "./pages/ProjectsPage";

function useRoutes(isAuth, state) {
  if (isAuth) {
    return (
      <Switch>
        <Route
          path="/create"
          exact
          render={() => <CreatePage state={state} />}
        />
        <Route
          path="/clients"
          exact
          render={() => <ClientsPage state={state} />}
        />
        <Route
          path="/projects"
          exact
          render={() => <ProjectsPage state={state} />}
        />
        <Route
          path="/detail/:id"
          exact
          render={() => <DetailPage state={state} />}
        />
        <Redirect to="/create" />
      </Switch>
    );
  }
  return (
    <Switch>
      <Route path="/" exact render={() => <AuthPage />} />
      <Redirect to="/" />
    </Switch>
  );
}

export default useRoutes;
