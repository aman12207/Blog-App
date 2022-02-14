import { combineReducers } from "redux";
import Postreducer from "./PostReducer"
import usersReducer from "./usersReducer";


export default combineReducers({
  posts : Postreducer,
  users: usersReducer
})