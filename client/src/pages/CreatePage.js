import React from "react";
import {CreateClient} from "../components/CreateClient";

export const CreatePage = ({state}) => {
    console.log(state)
    return (
        <div>
           <CreateClient state={state}/>
        </div>
    )
}