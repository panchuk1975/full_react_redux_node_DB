import store from "./reduxStore";

let initialState = [];

//---------------------------------Consts---------------------------------//
const SET_PROJECTS = "SET_PROJECTS    ";
//-----------------------------Actions CREATORS---------------------------//
export const setProjects = newProjectsData => ({
  type: SET_PROJECTS,
  newProjectsData
});
//---------------------------------------------------------------------//
export const setProjectsActionCreator = newProjectsData => {
  if (newProjectsData) {
    store.dispatch(setProjects(newProjectsData));
  }
};
//----------------------------------REDUCER------------------------------//
const projectsReducer = (state = initialState, action) => {
  switch (
    action.type // - change on switch
  ) {
    case SET_PROJECTS:
      return {
        ...state,
        liquids: action.newProjectsData
      };
    default:
      return state;
  }
};

export default projectsReducer;
