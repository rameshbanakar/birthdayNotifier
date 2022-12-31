const initialState=[]
const reducer=(state=initialState,action)=>{
    //console.log(action.payload)
     switch(action.type){
        case "BIRTHS":
            const date=new Date()
            const day=date.getDate()
            const month=date.getMonth()+1
            const fulldate = month + "-"+day;
            //console.log(fulldate)
            const s=action.payload.filter(a=>a.DOB.slice(5,10)===fulldate)
            return s
        case "IGNORE":
            return state.filter(a=>a._id!==action.payload)
            
        default :{
            return state
        }
     }
}
export default reducer