const reducer = (state, action) => {
  switch (action.type) {
    case "SET_LANGUAGE":
      return {
        ...state,
        info: action.payload,
      };
    case "SET_INDEX":
      return{
        ...state,
        indexComp: action.payload
      }
    default:
      return state;
  }
};

export default reducer;
