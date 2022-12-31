export const removeLoading = () => async (dispatch) => {
   // console.log("remove loading")
  dispatch({
    type: "LOAD_FALSE",
  });
};
export const setLoading = () => async (dispatch) => {
    //console.log("set loading")
  dispatch({
    type: "LOAD_TRUE",
  });
};