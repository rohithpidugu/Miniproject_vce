export const initialState = {
  user: [],
  allowedRoutes: [],
};

export default (state = initialState, action) => {
  if (action.type === "USER") {
    return action.payload;
  }
  if (action.type === "CLEAR") {
    return null;
  }
  return state;
};
