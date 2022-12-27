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
function App() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const mystyle = {
    backgroundImage:
      'url("https://i.pinimg.com/originals/04/70/cd/0470cd41a688f9c7ffeb41b76e5c8541.jpg")',
    backgroundRepeat: "no-repeat",
    height: "100vh",
    backgroundSize: "cover",
    backgrounfPosition: "fixed",
  };
  return (
    <BrowserRouter>
      <div style={mystyle}>
        <NavBar />
        <Alert />
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
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
