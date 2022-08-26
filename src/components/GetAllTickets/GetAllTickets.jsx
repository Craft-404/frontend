import { Box, CircularProgress, CssBaseline } from "@mui/material";
import { useEffect, useState } from "react";
import axios from "../axiosInstance";
import DashBoardCard from "../Dashboard/DashboardCard/DashboardCard";
import SideBar from "../SideBar/SideBar";

const GetAllTickets = () => {
  const token = localStorage.getItem("token");
  const [tasks, setAllTasks] = useState([]);
  const [loading, setLoading] = useState(false);
  const cancelTicket = (id) => {
    axios
      .patch(
        `/ticket/${id}`,
        {
          status: "Cancelled",
        },
        {
          headers: {
            Authorization: token,
            USER: "EMPLOYEE",
          },
        }
      )
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
  };
  const approveTicket = (id) => {
    axios
      .patch(
        `/ticket/${id}`,
        { status: "Completed" },
        {
          headers: {
            Authorization: token,
            USER: "EMPLOYEE",
          },
        }
      )
      .catch((response) => console.log(response))
      .catch((error) => console.log(error));
  };
  useEffect(() => {
    setLoading(true);
    axios
      .get("/ticket/all", {
        headers: {
          Authorization: token,
          USER: "EMPLOYEE",
        },
      })
      .then((response) => {
        setAllTasks(response.data);
        console.log(response.data);
      })
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, []);
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <SideBar />
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}
      >
        {loading ? (
          <Box sx={{ display: "grid", placeItems: "center", height: "80vh" }}>
            <CircularProgress />
          </Box>
        ) : (
          tasks &&
          tasks?.map((task, idx) => {
            return (
              <DashBoardCard
                show={false}
                key={idx}
                title={task.title}
                subtitle={task.description}
                token={"Token: " + task._id}
                onClickCancel={() => cancelTicket(task._id)}
                onClickComplete={() => approveTicket(task._id)}
                status={task.status}
              />
            );
          })
        )}
      </Box>
    </Box>
  );
};

export default GetAllTickets;
