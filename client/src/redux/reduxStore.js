import {applyMiddleware,createStore, combineReducers,compose} from "redux";
import clientsReduser from './clientsReduser';
import projectsReduser from './projectsReduser';
import thunkMiddleware from "redux-thunk";
//- thunk under the name  thunkMiddleware (from redux)

//-----------Redusers (Initial State + all functions-------------//

let rootReduser = combineReducers({ // - create pages of reduxState !!!!
     // - we alwaus took state from heare
     clients: clientsReduser, projects: projectsReduser // - special redux form reduser !
});

//type RootReduserType = typeof rootReduser;// (globalState:GlobalState)=>GlobalState
//export type AppStateType = ReturnType<RootReduserType>
//@ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReduser, /* preloadedState, */ composeEnhancers(
//const store = createStore(reducer, /* preloadedState, */ compose(
    applyMiddleware(thunkMiddleware)
  ));

//let store = createStore(redusers, applyMiddleware(thunkMiddleware));
// - add applyMiddleware() imported from redax than we can dispatch 
// - functions like THUNK function getUsersThunkCreator from usersReduser

//@ts-ignore
window.store = store;

export default store;