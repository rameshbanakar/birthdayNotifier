const initialState = {loader:false};
const Reducer = (state = initialState, action) => {
   //console.log(action.type);
  //console.log(action.payload);
  switch (action.type) {
    case "LOAD_TRUE":
      //console.log("hello from set loading");
      return {
        ...state,
        loader:true
      };

    case "LOAD_FALSE":
      //console.log("remove loading")
      return {
        ...state,
        loader:false
      };
    default:
      return state;
  }
};
export default Reducer;
