import {FETCHPOST,REMOVEPOST} from "../actions/postactions";
const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCHPOST:
      return action.payload
    case REMOVEPOST:{
      return []
    }
    default:
      return state;
  }
};
