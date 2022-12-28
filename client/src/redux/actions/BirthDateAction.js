import axios from "axios"
import { setAlert } from "./alertAction";
export const addBirthday=(data)=>async dispatch=>{
  //console.log(data,"from action")
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const res = await axios.post("/api/birthday/addNewBd", data, config);
    console.log(res)
    if (res.data.relation === "Family Member") {
      dispatch({
        type: "ADD_BIRTH_DATE_FAMILY",
        payload: res.data,
      });
    } else if (res.data.relation === "Other") {
      dispatch({
        type: "ADD_BIRTH_DATE_OTHERS",
        payload: res.data,
      });
    } else if (res.data.relation === "Friend") {
      dispatch({
        type: "ADD_BIRTH_DATE_FAMILY",
        payload: res.data,
      });
    } else if(res.data.relation === "Relative"){
          dispatch({
        type: "ADD_BIRTH_DATE_RELATIVES",
        payload: res.data,
      });
    }
      
    dispatch(setAlert(res.data,"green"))
      
  } catch (error) {
    console.log(error)
    dispatch(setAlert(error.response.data, "red"));
  }
    
}