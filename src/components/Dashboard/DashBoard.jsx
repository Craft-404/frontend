import {
  Box,
  CircularProgress,
  CssBaseline,
  Divider,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import SideBar from "../SideBar/SideBar";
import Annoucment from "./Announcement/Announcement";
import DueToday from "./DueToday/DueToday";
import DueTommorow from "./DueTommorow/DueTommorow";
import Overdue from "./Overdue/Overdue";
import axios from "../axiosInstance";

const DashBoard = () => {
  const token = localStorage.getItem("token");
  const USER = localStorage.getItem("user");
  const [allTasks, setAllTasks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [render, setRender] = useState(false);
  useEffect(() => {
    setLoading(true);
    axios
      .get("/dashboard", {
        headers: {
          Authorization: token,
          USER,
        },
      })
      .then((response) => setAllTasks(response.data))
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, [render]);
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <SideBar />
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}
      >
        <Typography variant="h5" style={{ fontWeight: "600" }}>
          Dashboard
        </Typography>
        <Divider sx={{ marginTop: "10px" }} />
        {loading ? (
          <Box sx={{ display: "grid", placeItems: "center", height: "80vh" }}>
            <CircularProgress />
          </Box>
        ) : (
          allTasks && (
            <Box sx={{ display: "flex" }}>
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Overdue tasks={allTasks.overdue} setRender={setRender} />
                <Annoucment announcement={allTasks.announcements} />
              </Box>
              <Divider
                orientation="vertical"
                style={{ height: "80vh", marginTop: "20px" }}
              />
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <DueToday tasks={allTasks.tasks} setRender={setRender} />
              </Box>
            </Box>
          )
        )}
      </Box>
    </Box>
  );
};

export default DashBoard;
