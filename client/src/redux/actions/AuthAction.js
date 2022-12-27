import axios from "axios";
import  {setAlert}  from "./alertAction";
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
export const logout = () => async (dispatch) => {
  //console.log(data);
    dispatch({
      type: "LOG_OUT",
    });
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
    //dispatch(setAlert("User Register Successfully", "green"))
    dispatch({
          type: "SIGN_UP",
          payload: res.data,
        })
    
    //alert("user register success", type);
   // dispatch(setAlert("User Register Successfully", "green"));
  } catch (error) {
    dispatch({
      type: "SIGN_UP_FAIL",
      payload:error.response.data
    });
    let type;
    if (error.response.status===409){
      type="red"
    } 
  
    dispatch(setAlert(error.response.data,type));
    
  }
};
