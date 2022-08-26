import { Box, CssBaseline } from "@mui/material";
import { useEffect, useState } from "react";
import axios from "../axiosInstance";
import DashBoardCard from "../Dashboard/DashboardCard/DashboardCard";
import SideBar from "../SideBar/SideBar";

const Approvals = () => {
  const [approvals, setApprovals] = useState();
  const token = localStorage.getItem("token");
  useEffect(() => {
    axios
      .get("/ticket/approval", {
        headers: {
          Authorization: token,
          USER: "EMPLOYEE",
        },
      })
      .then((response) => setApprovals(response.data))
      .catch((error) => console.log(error));
  }, []);
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <SideBar />
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}
      >
        {approvals.map((approval, idx) => {
          return <div key={idx}>{approval.title}</div>;
        })}
      </Box>
    </Box>
  );
};

export default Approvals;
