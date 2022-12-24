import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import Login from "./components/Login";
import AddNewDate from "./components/AddNewDate";
import "./App.css";
import Signup from "./components/Signup";
function App() {
  const mystyle = {
    backgroundImage:
      'url("https://i.pinimg.com/originals/04/70/cd/0470cd41a688f9c7ffeb41b76e5c8541.jpg")',
    backgroundRepeat: "no-repeat",
    height: "100vh",
    backgroundSize: "cover",
    backgrounfPosition: "fixed",
  };
  return (
    <div style={mystyle}>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/newDate" element={<AddNewDate />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
