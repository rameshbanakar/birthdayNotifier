import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchFriends } from "../redux/actions/BirthDateAction";
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
      {birthdays.length > 0 ? (
        birthdays.map((a) => (
          <div className="card"  key={a._id}>
            <h5 className="card-header">
              {a.firstName} {a.lastName}
            </h5>
            <div className="card-body">
              <h5 className="card-title">Special title treatment</h5>
              <p className="card-text">
                With supporting text below as a natural lead-in to additional
                content.
              </p>
              <div className="d-grid gap-2">
                <button className="btn btn-danger" type="button">
                  Button
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
