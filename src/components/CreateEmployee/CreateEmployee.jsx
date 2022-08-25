import {
  Box,
  CssBaseline,
  Divider,
  Drawer,
  List,
  Toolbar,
  Typography,
} from "@mui/material";
import SideBar from "../SideBar/SideBar";
import CreateEmployeeForm from "./CreateEmployeeForm/CreateEmployeeForm";

const CreateEmployee = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <SideBar />
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}
      >
        <CreateEmployeeForm />
      </Box>
    </Box>
  );
};

export default CreateEmployee;
