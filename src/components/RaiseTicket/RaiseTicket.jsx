import { CssBaseline } from "@mui/material";
import { Box } from "@mui/system";
import SideBar from "../SideBar/SideBar";
import RaiseTicketForm from "./RaiseTicketForm/RaiseTicketForm";

const RaiseTicket = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <SideBar />
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}
      >
        <RaiseTicketForm />
      </Box>
    </Box>
  );
};

export default RaiseTicket;
