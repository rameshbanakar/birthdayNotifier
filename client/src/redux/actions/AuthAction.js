import axios from "axios";
import  {setAlert}  from "./alertAction";
import  setAuthToken  from "../../utils/setAuthToken";
import { setLoading, removeLoading } from "./LoadActions";

export const login = (data) => async (dispatch) => {
  //console.log(data);
  try {
    dispatch(setLoading());
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
     setAuthToken(res.data);
    dispatch(removeLoading())
    dispatch(setAlert("user logged in successfully","green"))
  } catch (error) {
    dispatch(removeLoading());
    dispatch({
      type: "LOGIN_FAIL",
      payload:error
    });
    if(error.response.status===500){
       dispatch(setAlert(error.response.statusText, "orange"));
    }
    if (error.response.status === 404) {
      dispatch(setAlert(error.response.data, "orange"));
    }
     
    //console.log(error);
  

  //   dispatch(setAlert(error.response.data, "red"));
  //   console.log(error);
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
    dispatch(setLoading());
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const res = await axios.post("/api/auth/signup", data, config);
    //console.log(res)
    //dispatch(setAlert("User Register Successfully", "green"))
     dispatch(removeLoading());
    dispatch({
          type: "SIGN_UP",
          payload: res.data,
        })
    setAuthToken(res.data);
    //loadUser(res.data);
    dispatch(setAlert("User Signedup successfully", "green"));
  } catch (error) {
     dispatch(removeLoading());
    dispatch({
      type: "SIGN_UP_FAIL",
      payload:error.response.data
    });
    
    if (error.response.status===409){
       dispatch(setAlert(error.response.data, "red"));
    } else if(error.response.status===500){
         dispatch(setAlert("server not responding", "orange"));
    }else{
       dispatch(setAlert(error.response.data, "yello"));
    }
  
   
  }
};
