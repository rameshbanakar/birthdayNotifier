
export const setAlert = (msg,type) => async (dispatch) => {
  //console.log("set alert method");
  
  dispatch({
    type: "SET_ALERT",
    payload: {msg,type},
  });
  setTimeout(()=>dispatch({ type: "REMOVE_ALERT" ,payload:type}),3000);
};
