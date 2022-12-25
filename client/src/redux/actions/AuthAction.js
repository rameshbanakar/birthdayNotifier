import axios from "axios";
export const login = (data) => async (dispatch) => {
  console.log(data);
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const res = await axios.post("/api/auth", data, config);
    //console.log(res)
    dispatch({
      type: "LOG_IN",
      payload: res.data,
    });
  } catch (error) {
    console.log(error);
  }
};
