import { Route, Routes, Navigate } from "react-router-dom";
import CreateEmployee from "./components/CreateEmployee/CreateEmployee";
import DashBoard from "./components/Dashboard/DashBoard";
import Login from "./components/Login/Login";
import "./index.css";

function App() {
  const token = localStorage.getItem("token");
  return (
    <div style={{ height: "100%" }}>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<Login />} />
        <Route path="/createemployee" element={<CreateEmployee />} />
        <Route path="/dashboard" element={<DashBoard />} />
      </Routes>
    </div>
  );
}

export default App;
