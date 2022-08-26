import { Route, Routes, Navigate } from "react-router-dom";
import Approvals from "./components/Approvals/Approvals";
import ApprovalStatus from "./components/ApprovalStatus/ApprovalStatus";
import CreateEmployee from "./components/CreateEmployee/CreateEmployee";
import DashBoard from "./components/Dashboard/DashBoard";
import FileUpload from "./components/FileUpload/FileUplaod";
import GetAllTickets from "./components/GetAllTickets/GetAllTickets";
import Login from "./components/Login/Login";
import RaiseTicket from "./components/RaiseTicket/RaiseTicket";
import SignUp from "./components/SignUp/SignUp";
import UserLogin from "./components/UserLogin/UserLogin";
import "./index.css";

function App() {
  const token = localStorage.getItem("token");
  console.log = () => {};
  return (
    <div style={{ height: "100%" }}>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/dashboard" element={<DashBoard />} />
        <Route path="/createemployee" element={<CreateEmployee />} />
        <Route path="/raiseticket" element={<RaiseTicket />} />
        <Route path="/fileupload" element={<FileUpload />} />
        <Route path="/gettickets" element={<GetAllTickets />} />
        <Route path="/userlogin" element={<UserLogin />} />
        <Route path="/status" element={<ApprovalStatus />} />
        <Route path="/approvals" element={<Approvals />} />
      </Routes>
    </div>
  );
}

export default App;
