import React from "react";

export default function Signup() {
  return (
    <div className="form">
      <form action="">
        <input
          type="text"
          name="firstName"
          className="form-control"
          placeholder="First Name"
        />
        <br />
        <input
          type="text"
          name="lastName"
          className="form-control"
          placeholder="Last Name"
        />
        <br />
        <label htmlFor="DOB">Date of Birth</label>
        <input type="date" name="DOB" />
        <br />
        <input
          type="email"
          name="email"
          placeholder="Email id"
          className="form-control"
        />
        <br />
        <input
          type="password"
          name="password"
          placeholder="password"
          className="form-control"
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
