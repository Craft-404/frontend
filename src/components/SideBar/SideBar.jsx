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

const drawerWidth = 240;

const SideBarOptions = ["Create Employee"];

const SideBar = () => {
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
        {SideBarOptions.map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon sx={{ marginRight: "-20px" }}>
                <StarIcon style={{ color: "#FFFFFF8F" }} />
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default SideBar;
