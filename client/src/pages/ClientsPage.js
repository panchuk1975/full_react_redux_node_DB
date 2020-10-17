import React from "react";
import {ClientsComponent} from "../components/ClientsComponent";
export const ClientsPage = ({state}) => {
    let clients = state.clients;
    return (
        <div>
           <ClientsComponent clients={clients}/>
        </div>
    )
}