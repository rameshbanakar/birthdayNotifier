import React ,{useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRelatives } from "../redux/actions/BirthDateAction";
export default function Relatives() {
  const birthdays = useSelector((state) => state.birthdate.birthDateRelatives);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchRelatives());
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
