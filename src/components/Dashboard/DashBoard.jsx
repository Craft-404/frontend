import { Box, CssBaseline } from "@mui/material";
import SideBar from "../SideBar/SideBar";

const DashBoard = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <SideBar />
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}
      >
        DashBoard
      </Box>
    </Box>
  );
};

export default DashBoard;
