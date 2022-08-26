import { Box, Typography } from "@mui/material";
import axios from "../../axiosInstance";
import DashBoardCard from "../DashboardCard/DashboardCard";

const Overdue = ({ tasks, setRender }) => {
  const token = localStorage.getItem("token");
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
      .then((response) => setRender((render) => !render))
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
      .catch((response) => setRender((render) => !render))
      .catch((error) => console.log(error));
  };
  return (
    <Box sx={{ minWidth: "400px", padding: "30px" }}>
      <Typography variant="h5" color="#0082F5" style={{ fontWeight: "700" }}>
        Overdue Tasks
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          marginTop: "10px",
          gap: "15px",
        }}
      >
        {tasks?.length > 0 ? (
          tasks?.map((task, idx) => {
            return (
              <DashBoardCard
                key={idx}
                title={task.title}
                subtitle={task.description}
                token={"Token: " + task._id}
                onClickCancel={() => cancelTicket(task._id)}
                onClickComplete={() => approveTicket(task._id)}
              />
            );
          })
        ) : (
          <Box>
            <Typography variant="h4">No Tasks Overdue</Typography>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default Overdue;
