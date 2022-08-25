import CreateEmployee from "./components/CreateEmployee/CreateEmployee";
import Login from "./components/Login/Login";
import "./index.css";
import { Route, Routes } from "react-router-dom";
import SideBar from "./components/SideBar/SideBar";
import DashBoard from "./components/Dashboard/DashBoard";
import { ProtectedRoute } from "./helpers/ProtectedRoute/ProtectedRoute";

function App() {
  const token = localStorage.getItem("token");
  return (
    <div style={{ height: "100%" }}>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/createemployee" element={<CreateEmployee />} />
        <Route path="/dashboard" element={<DashBoard />} />
      </Routes>
    </div>
  );
}

export default App;
