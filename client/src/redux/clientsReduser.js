import store from "./reduxStore";

let initialState = [];

//---------------------------------Consts---------------------------------//
const SET_CLIENTS = "SET_CLIENTS";
//-----------------------------Actions CREATORS---------------------------//
export const setClients = newClientsData => ({
  type: SET_CLIENTS,
  newClientsData
});
//---------------------------------------------------------------------//
export const setClientsActionCreator = newClientsData => {
  if (newClientsData) {
    store.dispatch(setClients(newClientsData));
  }
};
//----------------------------------REDUCER------------------------------//
const clientsReducer = (state = initialState, action) => {
  switch (
    action.type // - change on switch
  ) {
    case SET_CLIENTS:
      return {
        ...state,
        cars: action.newClientsData
      };
    default:
      return state;
  }
};

export default clientsReducer;
