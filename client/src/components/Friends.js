import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchFriends, deleteBirthDay } from "../redux/actions/BirthDateAction";
export default function Friends() {
  const birthdays = useSelector((state) => state.birthdate.birthDateFriends);
  console.log(birthdays, "from friends component");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchFriends());
    // eslint-disable-next-line
  }, []);
 
  return (
    <>
      <div>
        <h3 style={{ textAlign: "center" }}>
          Yours Friends List to wish them on their birthday
        </h3>
      </div>
      {birthdays.length > 0 ? (
        birthdays.map((a) => (
          <div className="card" key={a._id}>
            <h5 className="card-header">
              {a.firstName} {a.lastName}
            </h5>
            <div className="card-body">
              <h5 className="card-title">
                Date of Birth:--
                {a.DOB.slice(8, 10) +
                  "/" +
                  a.DOB.slice(5, 7) +
                  "/" +
                  a.DOB.slice(0, 4)}
              </h5>
              <p className="card-text">
                <i
                  class="fa-sharp fa-solid fa-envelope-open"
                  style={{ margin: "2px" }}
                ></i>
                <a href="">{a.email}</a>
                <br></br>
                <i class="fa-solid fa-phone" style={{ margin: "2px" }}></i>
                {a.phone}
              </p>
              <div>
                <button class="btn btn-dark buttons1" type="button">
                  Update
                </button>
                <button class="btn btn-danger buttons2" type="button" onClick={()=>dispatch(deleteBirthDay(a._id))}>
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))
      ) : (
        <h5>No Data Available</h5>
      )}
    </>
  );
}
