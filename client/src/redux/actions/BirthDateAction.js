import axios from "axios"
export const addBirthday=(data)=>async dispatch=>{
  console.log(data)
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const res=await axios.post("/",data,config)
    //console.log(res)
    dispatch({
      type: "ADD_BIRTH_DATE",
      payload: res.data,
    });
  } catch (error) {
    console.log(error)
  }
    
}