import React,{useEffect} from "react";
import { fetchOthers } from "../redux/actions/BirthDateAction";
import { useDispatch, useSelector } from "react-redux";
export default function Others() {
  const birthdays = useSelector((state) => state.birthdate.birthDateOthers);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchOthers());
    // eslint-disable-next-line
  }, []);
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
