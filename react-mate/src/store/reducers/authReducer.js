const initialState = {
    token: null,
  };
  
  const authReducer = (state = initialState, action) => {
    switch (action.type) {
      case "SAVE_TOKEN":
        return {
          ...state,
          token: action.payload,
        };
      case "DELETE_TOKEN":
        return {
          ...state,
          token: null,
        };
      default:
        return state;
    }
  };
  
  export default authReducer;