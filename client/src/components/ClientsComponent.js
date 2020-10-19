import React from "react";
import { useHistory } from "react-router-dom";

export const ClientsComponent = React.memo(({ clients }) => {
  let nextNumber = 1;
  if (clients.length > 0) {
    nextNumber = clients[clients.length - 1].serialNumber + 1;
  }
  //set next client number to LS
  localStorage.setItem("nextNumber", JSON.stringify(nextNumber));
  //History
  const history = useHistory();
  //To Client page
  const prevPage = (client) => {
    history.push(`/create/${client}`);
  };
  clients.sort((a, b) => (b.serialNumber > a.serialNumber ? 1 : -1));
  return (
    <div className="row">
      <div
        className="col s12 offset-s0 grey darken-3 white-text center-align"
        style={{ marginBottom: 3, marginTop: 5 }}
      >
        List of clients
      </div>
      {clients.map((client) => {
        //console.log(client._id)
        return (
          <div key={client.serialNumber} onClick={() => prevPage(client._id)}>
            <table className="highlight">
              <tbody>
                <tr>
                  <td width="20" className="centered darkColumn">
                    <small>{client.serialNumber}</small>
                  </td>
                  <td width="100" className="lightColumn">
                    <small>{client.officialName}</small>
                  </td>
                  <td width="50" className="darkColumn">
                    <small>{client.genСontractNum}</small>
                  </td>
                  <td width="50" className="lightColumn">
                    <small>{client.personStatus}</small>
                  </td>
                  <td width="100" className="darkColumn">
                    <small>{client.contactPerson}</small>
                  </td>
                  <td width="30" className="lightColumn">
                    <small>{client.telNumber}</small>
                  </td>
                  <td width="150" className="darkColumn">
                    <small>{client.address}</small>
                  </td>
                </tr>
              </tbody>
            </table>
            {/* <table className="highlight">
              <tbody>
                <tr>
                  <td width="100" className="lightColumn">
                    <small>{client.dateOfTalks}</small>
                  </td>
                  <td width="100" className="darkColumn">
                    <small>{client.talksResult}</small>
                  </td>
                  <td width="100" className="lightColumn">
                    <small>{client.sourceInfo}</small>
                  </td>
                  <td width="100" className="darkColumn">
                    <small>{client.respPerson}</small>
                  </td>
                  <td width="100" className="lightColumn">
                    <small>{client.signData}</small>
                  </td>
                  <td width="100" className="darkColumn">
                    <small>{client.genСontractTerm}</small>
                  </td>
                </tr>
              </tbody>
            </table> */}
            {/* {windowWidth > 247 && (
                    <td width="50" className={typeRouteКР}>
                      <small>{routeToКР}</small>
                    </td>
                  )}
                  {windowWidth > 327 && (
                    <td width="100">
                      <small className={carType}>СР: </small>
                      <small className={typeRouteСР}>{СР}</small>
                    </td>
                  )}
                  {windowWidth > 377 && (
                    <td width="50" className={typeRouteСР}>
                      <small>{routeToСР}</small>
                    </td>
                  )}
                  {windowWidth > 477 && (
                    <td width="100">
                      <small className={carType}>ТО1: </small>
                      <small className={typeRouteTO1}>{TO1}</small>
                    </td>
                  )}
                  {windowWidth > 527 && (
                    <td width="50" className={typeRouteTO1}>
                      <small>{routeToTO1}</small>
                    </td>
                  )}
                  {windowWidth > 770 && (
                    <td width="100">
                      <small className={carType}>ТО2: </small>
                      <small className={typeRouteTO2}>{TO2}</small>
                    </td>
                  )}
                  {windowWidth > 770 && (
                    <td width="50" className={typeRouteTO2}>
                      <small>{routeToTO2}</small>
                    </td>
                  )} */}
          </div>
        );
      })}
    </div>
  );
});

// {clients && (
// <form className="col s12">

// )}
