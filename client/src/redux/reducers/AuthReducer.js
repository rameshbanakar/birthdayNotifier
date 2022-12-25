const initialState = {
  token: localStorage.getItem("token"),
  isAuthenticated: false,
  loading: true,
  user: null,
  error:null
};
const Reducer = (state = initialState, action) => {
  console.log(action.type);
  console.log(action.payload);
  switch (action.type) {
    case "LOG_IN":
      localStorage.setItem("token", action.payload);
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
      };
    case "SIGN_UP":
      localStorage.setItem("token", action.payload);
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
      };
      case "LOGIN_FAIL":
      case "SIGN_UP_FAIL":
        localStorage.removeItem("token")
        return{
          ...state,
          isAuthenticated:false,
          loading:false,
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
