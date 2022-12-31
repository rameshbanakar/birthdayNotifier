const initialState = {
  token: localStorage.getItem("token"),
  isAuthenticated: false,
  user: null,
  error:null
};
const Reducer = (state = initialState, action) => {
  //console.log(action.type);
  //console.log(action.payload);
  switch (action.type) {
    
    case "LOG_IN":
      localStorage.setItem("token", action.payload);
      return {
        ...state,
        ...action.payload,
        isAuthenticated: true,
      };
    case "SIGN_UP":
      localStorage.setItem("token", action.payload);
      return {
        ...state,
        
        isAuthenticated: true,
      };
      case "LOGIN_FAIL":
      case "SIGN_UP_FAIL":
      case "LOG_OUT":
        localStorage.removeItem("token")
        return{
          ...state,
          token:null,
          isAuthenticated:false,
          error:action.payload
        }

    default: {
      return {
        ...state,
      };
    }
  }
};
export default Reducer;
