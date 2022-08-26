import { Box, CssBaseline } from "@mui/material";
import SideBar from "../SideBar/SideBar";
import DragAndDrop from "./DragAndDrop/DragAndDrop";

const FileUpload = ({ sideBar = true, setURL = () => {} }) => {
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      {sideBar && <SideBar />}
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}
      >
        <DragAndDrop setURL={setURL} />
      </Box>
    </Box>
  );
};

export default FileUpload;
