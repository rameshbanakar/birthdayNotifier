import React from 'react'
import { useDispatch, useSelector } from "react-redux";
export default function Relatives() {
     const birthdays = useSelector(
       (state) => state.birthdate.birthDateRelatives
     );
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
