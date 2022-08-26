import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import DashBoardCard from "../DashboardCard/DashboardCard";

const DueTommorow = ({ tasks }) => {
  return (
    <Box sx={{ minWidth: "400px", padding: "30px" }}>
      <Typography variant="h5" color="#0082F5" style={{ fontWeight: "700" }}>
        Tasks Due Tommorow
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
          tasks?.push((task) => {
            return (
              <DashBoardCard
                title={task.title}
                subtitle="Atmanirbhar Bharat Scheme"
                token="Token: 69696969abdnd"
                time="5:00 PM"
              />
            );
          })
        ) : (
          <Box>
            <Typography variant="h4">No Tasks Due Tommorow</Typography>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default DueTommorow;
