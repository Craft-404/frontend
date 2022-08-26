import { Box, Typography } from "@mui/material";
import DashBoardCard from "../DashboardCard/DashboardCard";
import AnnoucmentCard from "./AnnouncementCard/Announcement";

const Annoucment = ({ announcement }) => {
  console.log("announcement", announcement);
  return (
    <Box sx={{ minWidth: "400px", padding: "30px" }}>
      <Typography variant="h5" color="#0082F5" style={{ fontWeight: "700" }}>
        Announcement
      </Typography>
      <AnnoucmentCard announcement={announcement} />
    </Box>
  );
};

export default Annoucment;
