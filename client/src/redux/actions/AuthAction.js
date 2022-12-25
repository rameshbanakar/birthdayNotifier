import axios from "axios";
export const login = (data) => async (dispatch) => {
  //console.log(data);
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const res = await axios.post("/api/auth/login", data, config);
    //console.log(res)
    dispatch({
      type: "LOG_IN",
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: "LOGIN_FAIL",
      payload:error
    });
    //console.log(error);
  }
};
export const signup = (data) => async (dispatch) => {
  //console.log(data);
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const res = await axios.post("/api/auth/signup", data, config);
    //console.log(res)
    dispatch({
      type: "SIGN_UP",
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: "SIGN_UP_FAIL",
      payload:error
    });
    //console.log(error);
  }
};
