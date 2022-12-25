import React,{useState} from "react";
import { useDispatch } from "react-redux";
import { signup } from "../redux/actions/AuthAction";
export default function Signup() {
  const dispatch = useDispatch();
    const [data, setData] = useState({
      firstName: "",
      lastName: "",
      DOB: "",
      email: "",
      password: "",
    });
    const changed=(e)=>{
     
      setData({...data,[e.target.name]:e.target.value})
    }
    const submitted=(e)=>{
        e.preventDefault();
        console.log(data)
        dispatch(signup(data))
    }
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
          type="password"
          name="password"
          placeholder="password"
          className="form-control"
          value={data.password}
          onChange={changed}
        />
        <br />
        <div className="d-grid gap-2">
          <button className="btn btn-primary" type="submit">
            Signup
          </button>
        </div>
        <br />
      </form>
      <p>
        If you already have an account ?<a href="/login">click here</a>
      </p>
    </div>
  );
}
