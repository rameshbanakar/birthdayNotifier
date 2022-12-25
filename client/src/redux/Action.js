import axios from "axios"
export const addBirthday=async(data)=>{
    const res=await axios.post("/",data)
    console.log(res)
    return{
        type:"ADD_BIRTH_DATE",
        payload:data
    }

}