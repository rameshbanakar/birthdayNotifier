import React,{useEffect} from "react";
import { useSelector,useDispatch } from "react-redux";
import { fetchFriends } from "../redux/actions/BirthDateAction"
export default function Friends() {
  const birthdays = useSelector((state) => state.birthdate.birthDateFriends);
  console.log(birthdays,"from friends component")
  const dispatch=useDispatch()
  useEffect(() => {
    dispatch(fetchFriends());
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
