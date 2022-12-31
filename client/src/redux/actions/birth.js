import axios from "axios"
export const birthdays=()=>async(dispatch)=>{
   try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const res = await axios.get("/api/birthday/fetch/todaybirths", config);
    //console.log(res)
    dispatch({
      type: "BIRTHS",
      payload: res.data,
    });
  } catch (error) {
    console.log(error);
  }
}
export const ignore=(data)=>async(dispatch)=>{
   
       dispatch({
         type: "IGNORE",
         payload: data,
       });
  
    
}