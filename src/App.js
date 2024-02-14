import "./App.css";
import Login from "./components/Login.js";
import Signup from "./components/Signup.js";
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/Login" element={<Login />} />
          <Route path="/Signup" element={<Signup />} />
          {/* <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/userdashboard" element={<UserDashboard />} /> */}
          <Route path="/" element={<Login />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
