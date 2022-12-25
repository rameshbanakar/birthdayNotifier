const initialState={
    birthDate:[]
};
const Reducer=(state=initialState,action)=>{
    switch(action.type){
        case "ADD_BIRTH_DATE":
            return {
              ...state,
              birthDate:[...state.birthDate,action.payload]
            };
        default:{
            return {
                ...state
            }
        }
    }
}
export default Reducer;