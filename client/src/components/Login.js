import React from "react";

export default function Login() {
  return (
    <div className="form">
      <form action="">
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
