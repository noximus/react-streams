import { combineReducers } from "redux";
import authReducer from "./authReducer";

export default combineReducers({
  auth: authReducer
})

// const initialState = {

// }

// export default (state = initialState, { type, payload }) => {
//   switch (type) {

//   case typeName:
//     return { ...state, ...payload }

//   default:
//     return state
//   }
// }
