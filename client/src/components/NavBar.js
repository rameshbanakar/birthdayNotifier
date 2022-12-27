import React from "react";
import { logout } from "../redux/actions/AuthAction";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
export default function NavBar() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  //console.log(isAuthenticated,":- from nav bar state of autentication")
  const dispatch=useDispatch()
  const logoutuser=(e)=>{
    e.preventDefault()
      dispatch(logout())
  }
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img
              src="https://media.istockphoto.com/id/1311461815/vector/illustration-vector-graphic-design-asset-of-cream-cake-suitable-for-multipurpose-content.jpg?s=612x612&w=0&k=20&c=JeNpdxUftEdYWWjPRiqUCWxYQs10Y8ulLy03RFNFdIE="
              alt="Logo"
              width="30"
              height="24"
              className="d-inline-block align-text-top"
            />
            BirthDay Notifier
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse makeFloat"
            id="navbarNavDropdown"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/newDate"
                >
                  Add New BirthDay
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>

              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Choose
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to="#">
                      Friends
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#">
                      Family
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#">
                      Relatives
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#">
                      Others
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
        {isAuthenticated ? (
          <Link className="nav-link" to="#" onClick={logoutuser}>
            Logout
          </Link>
        ) : (
          <Link className="nav-link" to="/login">
            Login
          </Link>
        )}
      </nav>
    </>
  );
}
