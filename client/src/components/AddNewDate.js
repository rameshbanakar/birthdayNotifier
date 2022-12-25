
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addBirthday } from "../redux/Action";

export default function AddNewDate() {
  const dispatch = useDispatch();
  const birthDate = useSelector((state) => state.birthDate);

  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    DOB: "",
    email: "",
    phone: "",
    relation: null,
  });
  const changed = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const submitted = (e) => {
    e.preventDefault();

    dispatch(addBirthday(data));
  };
  useEffect(() => {
    console.log(birthDate);
  }, [birthDate]);
  const cancel = () => {
    setData({
      firstName: "",
      lastName: "",
      DOB: "",
      email: "",
      phone: "",
      relation: null,
    });
  };
  return (
    <div className="form">
      <form onSubmit={submitted}>
        <input
          type="text"
          name="firstName"
          className="form-control"
          placeholder="First Name"
          value={data.firstName}
          onChange={changed}
        />
        <br />
        <input
          type="text"
          name="lastName"
          className="form-control"
          placeholder="Last Name"
          value={data.lastName}
          onChange={changed}
        />
        <br />
        <label htmlFor="DOB">Date of Birth:-</label>
        <input
          type="date"
          name="DOB"
          required
          onChange={changed}
          value={data.DOB}
        />
        <br />
        <br />
        <div>
          <input
            type="radio"
            name="relation"
            value="Friend"
            onChange={changed}
            className="radiobtn"
          />
          Friend
          <input
            type="radio"
            name="relation"
            value="Family Member"
            onChange={changed}
            className="radiobtn"
          />
          Family Member
          <input
            type="radio"
            name="relation"
            value="Relative"
            onChange={changed}
            className="radiobtn"
          />
          Relative
          <input
            type="radio"
            name="relation"
            value="Other"
            onChange={changed}
            className="radiobtn"
          />
          Other
        </div>
        <br />
        <input
          type="email"
          name="email"
          placeholder="Email id"
          className="form-control"
          value={data.email}
          onChange={changed}
        />
        <br />
        <input
          type="text"
          name="phone"
          placeholder="Phone Number"
          className="form-control"
          value={data.phone}
          onChange={changed}
        />
        <br />
        <div className="d-grid gap-2">
          <button className="btn btn-success" type="submit">
            Add BirthDay
          </button>
          <button className="btn btn-danger" onClick={cancel}>
            Cancel
          </button>
        </div>
        <br />
      </form>
    </div>
  );
}
