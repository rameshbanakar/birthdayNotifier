import React,{useEffect} from "react";
import { fetchFamily } from "../redux/actions/BirthDateAction";
import { useDispatch, useSelector } from "react-redux";
export default function Family() {
  const birthdays = useSelector((state) => state.birthdate.birthDateFamily);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchFamily());
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
