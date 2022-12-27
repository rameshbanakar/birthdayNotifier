const initialState=[]
const Reducer = (state = initialState, action) => {
  //console.log(action.type);
  //console.log(action.payload);
  switch (action.type) {
    case "SET_ALERT":
      console.log("hello from set alert");
      return [...state,action.payload]
    
    case "REMOVE_ALERT":
      console.log("remove alert")
      return state.filter(a=>a.type!==action.payload)
    default:
      return state;
  }
};
export default Reducer;