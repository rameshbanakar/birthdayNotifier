import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import Login from "./components/Login";
import AddNewDate from "./components/AddNewDate";
import "./App.css";
import Signup from "./components/Signup";
import { useSelector,} from "react-redux";
import Alert from "./components/Alert";
import Friends from "./components/Friends";
import Family from "./components/Family";
import Relatives from "./components/Relatives";
import Others from "./components/Others";
import setAuthToken from "./utils/setAuthToken"
import Spinner from "./components/Spinner";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}
function App() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const loading =useSelector(state=>state.auth.loading)
  console.log(loading,"from app component")
  return (
    <BrowserRouter>
      <div className="mystyle">
        <NavBar />
        <Alert />
        {loading?<Spinner/>:
        <Routes>
          <Route
            path="/"
            element={
              !isAuthenticated ? (
                <Navigate to="/login" replace={true} />
              ) : (
                <Home />
              )
            }
          />
          <Route path="/about" element={<About />} />
          <Route
            path="/login"
            element={
              isAuthenticated ? <Navigate to="/" replace={true} /> : <Login />
            }
          />
          <Route
            path="/signup"
            element={
              isAuthenticated ? <Navigate to="/" replace={true} /> : <Signup />
            }
          />
          <Route
            path="/newDate"
            element={
              !isAuthenticated ? (
                <Navigate to="/login" replace={true} />
              ) : (
                <AddNewDate />
              )
            }
          />
          <Route
            path="/friends"
            element={
              !isAuthenticated ? (
                <Navigate to="/login" replace={true} />
              ) : (
                <Friends />
              )
            }
          />
          <Route
            path="/family"
            element={
              !isAuthenticated ? (
                <Navigate to="/login" replace={true} />
              ) : (
                <Family />
              )
            }
          />
          <Route
            path="/relatives"
            element={
              !isAuthenticated ? (
                <Navigate to="/login" replace={true} />
              ) : (
                <Relatives />
              )
            }
          />
          <Route
            path="/others"
            element={
              !isAuthenticated ? (
                <Navigate to="/login" replace={true} />
              ) : (
                <Others />
              )
            }
          />
        </Routes>
      }
      </div>
    </BrowserRouter>
  );
}

export default App;
