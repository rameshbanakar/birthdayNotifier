import React from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Friends() {
  const birthdays = useSelector((state) => state.birthdate.birthDateFriends);
  return (
    <>
      {birthdays.length > 0 ? (
        birthdays.map((a) => <p>{a.firstName}</p>)
      ) : (
        <h5>No Data Available</h5>
      )}
    </>
  );
}
