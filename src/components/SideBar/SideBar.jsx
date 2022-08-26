import {
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import StarIcon from "@mui/icons-material/Star";
import { useNavigate } from "react-router-dom";
import DashboardIcon from "@mui/icons-material/Dashboard";
import BadgeIcon from "@mui/icons-material/Badge";
import ConfirmationNumberIcon from "@mui/icons-material/ConfirmationNumber";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import LogoutIcon from "@mui/icons-material/Logout";
import LocalActivityIcon from "@mui/icons-material/LocalActivity";
import ApprovalIcon from "@mui/icons-material/Approval";
import axios from "../axiosInstance";
import { useState } from "react";

const drawerWidth = 240;

const SideBarOptionsEmployee = [
  {
    text: "Dashboard",
    to: "dashboard",
    icon: <DashboardIcon style={{ color: "#FFFFFF8F" }} />,
  },
  {
    text: "Create Employee",
    to: "createemployee",
    icon: <BadgeIcon style={{ color: "#FFFFFF8F" }} />,
  },
  {
    text: "Create Task",
    to: "raiseticket",
    icon: <ConfirmationNumberIcon style={{ color: "#FFFFFF8F" }} />,
  },
  {
    text: "Upload File",
    to: "fileupload",
    icon: <FileUploadIcon style={{ color: "#FFFFFF8F" }} />,
  },
  {
    text: "See All Tickets",
    to: "gettickets",
    icon: <LocalActivityIcon style={{ color: "#FFFFFF8F" }} />,
  },
  // {
  //   text: "Approvals",
  //   to: "approvals",
  //   icon: <ApprovalIcon style={{ color: "#FFFFFF8F" }} />,
  // },
  {
    text: "Logout",
    to: "",
    icon: <LogoutIcon style={{ color: "#FFFFFF8F" }} />,
  },
];

const SideBarOptionsUser = [
  {
    text: "Apply for Scheme",
    to: "userlogin",
    icon: <FileUploadIcon style={{ color: "#FFFFFF8F" }} />,
  },
  {
    text: "Approval Status",
    to: "status",
    icon: <ApprovalIcon style={{ color: "#FFFFFF8F" }} />,
  },
  {
    text: "Logout",
    to: "",
    icon: <LogoutIcon style={{ color: "#FFFFFF8F" }} />,
  },
];

const SideBar = () => {
  const navigate = useNavigate();
  const USER = localStorage.getItem("user");
  const token = localStorage.getItem("token");
  const designation = localStorage.getItem("designation");
  const [loading, setLoading] = useState(false);
  const logout = () => {
    if (USER == "EMPLOYEE") {
      axios
        .get("/auth/logout", {
          headers: {
            Authorization: token,
            USER,
          },
        })
        .then((response) => navigate("/login"))
        .catch((error) => {
          console.log(error);
        });
    } else {
      axios
        .get("/user/logout", {
          headers: {
            Authorization: token,
            USER: "USER",
          },
        })
        .then((response) => navigate("/login"))
        .catch((error) => {
          console.log(error);
        });
    }
  };
  const SideBarOptions =
    USER == "EMPLOYEE" ? SideBarOptionsEmployee : SideBarOptionsUser;
  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
        },
      }}
      PaperProps={{
        sx: {
          backgroundColor: "#006CCC",
          color: "white",
        },
      }}
      variant="permanent"
      anchor="left"
      style={{ color: "blue" }}
    >
      {/* <Toolbar /> */}
      <Divider />
      <Box sx={{ display: "grid", padding: "10px" }}>
        <Typography variant="h6">Sainyojit</Typography>
      </Box>
      <List>
        {SideBarOptions.map((option, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton
              onClick={
                option.text == "Logout"
                  ? logout
                  : () => navigate(`/${option.to}`)
              }
            >
              <ListItemIcon sx={{ marginRight: "-20px" }}>
                {option.icon}
              </ListItemIcon>
              <ListItemText primary={option.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default SideBar;
