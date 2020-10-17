import React from "react";
//import { NavLink } from "react-router-dom";

export const ClientsComponent = React.memo(({ clients }) => {
  
  //  cars.sort((a, b) => a.governmentCarNumber > b.governmentCarNumber ? 1 : -1);
  return (
    <div className="row">
        <form>
          <div
            className="col s12 offset-s0 grey darken-3 white-text center-align"
            style={{ marginBottom: 3, marginTop: 5 }}
          >
            List of clients
          </div>
        </form>
      {clients && (
        <form className="col s12">
         
        </form>
      )}
    </div>
  );
});
