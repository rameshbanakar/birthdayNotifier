import axios from "axios";
import { setAlert } from "./alertAction";
import { setLoading, removeLoading } from "./LoadActions";
export const addBirthday = (data) => async (dispatch) => {
  //console.log(data,"from action")

  try {
    dispatch(setLoading());
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const res = await axios.post("/api/birthday/addNewBd", data, config);
    //console.log(res);
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
    } else if (res.data.relation === "Relative") {
      dispatch({
        type: "ADD_BIRTH_DATE_RELATIVES",
        payload: res.data,
      });
    }
    dispatch(removeLoading());
    dispatch(setAlert(res.data, "green"));
  } catch (error) {
    //console.log(error);
    dispatch(setAlert(error.response.statusText, "orange"));
  }
};
export const loader = () => async (dispatch) => {
  //console.log("loader is running")
  dispatch({ type: "LOAD_TRUE" });
};
export const fetchFriends = () => async (dispatch) => {
  //dispatch(setLoading());
  //console.log(data,"from action")
  try {
    //;
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const res = await axios.get("/api/birthday/fetch/friends", config);
    //console.log(res.data);
    if (res) {
      dispatch({
        type: "FETCH_BIRTH_DATE_FRIENDS",
        payload: res.data,
      });
    }

    //dispatch(removeLoading());
    //console.log("diptach fecth       type: FETCH_BIRTH_DATE_FRIENDS,exucted")
  } catch (error) {
    //console.log(error);
    dispatch(setAlert(error.response.statusText, "orange"));
  }
};
export const fetchFamily = () => async (dispatch) => {
  //console.log(data,"from action")
  //dispatch(setLoading());
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const res = await axios.get("/api/birthday/fetch/family", config);
    //console.log(res.data);
    dispatch(removeLoading());
    dispatch({
      type: "FETCH_BIRTH_DATE_FAMILY",
      payload: res.data,
    });
  } catch (error) {
    //console.log(error);
    // dispatch(removeLoading());
    dispatch(setAlert(error.response.statusText, "orange"));
  }
};
export const fetchRelatives = () => async (dispatch) => {
  //console.log(data,"from action")
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const res = await axios.get("/api/birthday/fetch/relatives", config);
    //console.log(res.data);

    dispatch({
      type: "FETCH_BIRTH_DATE_RELATIVES",
      payload: res.data,
    });
  } catch (error) {
    //console.log(error);
    dispatch(setAlert(error.response.statusText, "orange"));
  }
};
export const fetchOthers = () => async (dispatch) => {
  //console.log(data,"from action")
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const res = await axios.get("/api/birthday/fetch/others", config);
    //console.log(res.data);

    dispatch({
      type: "FETCH_BIRTH_DATE_OTHERS",
      payload: res.data,
    });
  } catch (error) {
    console.log(error);
    dispatch(setAlert(error.response.statusText, "orange"));
  }
};
export const deleteBirthDay = (data) => async (dispatch) => {
  //console.log("delete birthday called",data)
  try {
    
    const res = await axios.delete(
      `/api/birthday/delete/${data}`
    );
    //console.log(res.data);

    dispatch({
      type: "DELETE",
      payload: data,
    });
    dispatch(setAlert(res.data, "green"));
  } catch (error) {
    console.log(error);
    dispatch(setAlert(error.response.statusText, "orange"));
  }
};
