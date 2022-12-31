import React,{useEffect} from "react";
import {useDispatch,useSelector} from "react-redux"
import { birthdays, ignore } from "../redux/actions/birth";
export default function Home() {
  const birthdayss = useSelector((state) => state.birthdays);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(birthdays());
    // eslint-disable-next-line
  }, []);
  // const ignoreMe=(data)=>{
  //   dispatch(ignore(data));
  // }
  const hello=(a)=>{
    console.log("hello "+a)
  }
  return (
    <>
      <div>
        <h3 style={{ textAlign: "center" }}>
          The follwoings are have their birthday today wish them
        </h3>
      </div>
      {birthdayss.length > 0 ? (
        birthdayss.map((a) => (
          <div className="card" key={a._id}>
            <h5 className="card-header">
              {a.firstName} {a.lastName}
            </h5>
            <div className="card-body" style={{ backgroundColor: "yellow" }}>
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
                <button class="btn btn-success buttons1" type="button">
                  wish them
                </button>
                <button
                  class="btn btn-danger buttons2"
                  onClick={() => dispatch(ignore(a._id))}
                >
                  Ignore
                </button>
              </div>
            </div>
          </div>
        ))
      ) : (
        <h5>No Data Available</h5>
      )}
    </>
  );;
}
