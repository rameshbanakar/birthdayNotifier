import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../redux/actions/AuthAction";
export default function Login() {
  const dispatch = useDispatch();
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const changed = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const submitted = (e) => {
    e.preventDefault();
    console.log(data);
    dispatch(login(data));
  };
  return (
    <div className="form">
      <form onSubmit={submitted}>
        <input
          type="email"
          name="email"
          placeholder="Email id"
          className="form-control"
          onChange={changed}
          value={data.email}
        />
        <br />
        <input
          type="password"
          name="password"
          placeholder="password"
          className="form-control"
          onChange={changed}
          value={data.password}
        />
        <br />
        <div className="d-grid gap-2">
          <button className="btn btn-primary" type="submit">
            login
          </button>
        </div>
        <br />
      </form>
      <p>
        If you don't have account ?<a href="/signup">click here</a>
      </p>
    </div>
  );
}
