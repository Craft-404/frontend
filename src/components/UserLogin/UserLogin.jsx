import {
  Box,
  Button,
  CssBaseline,
  Divider,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import axios from "../axiosInstance";
import FileUpload from "../FileUpload/FileUplaod";
import SideBar from "../SideBar/SideBar";

const UserLogin = ({ showDropBox = true }) => {
  const [scheme, setScheme] = useState();
  const [typeOfDocument, setTypeOfDocument] = useState("10th Marksheet");
  const [URL, setURL] = useState();
  const [org, setOrg] = useState();
  const [contact, setContact] = useState();
  const studentSchemeArray = [
    "SWANATH SCHOLARSHIP SCHEME",
    "YOUTH UNDERTAKING VISIT FOR ACQUIRING KNOWLEDGE",
    "LILAVATI AWARD",
  ];
  const teacherSchemeArray = [
    "MODERNISATION AND REMOVAL OF OBSOLESCENCE",
    "GRANT FOR ORGANISING CONFERENCE",
  ];
  const institutionSchemeArray = [
    "STTP-SFURTI",
    "NATIONAL INITIATIVE FOR TECHNICAL TEACHERS TRAINING",
  ];
  const USER = localStorage.getItem("userType");
  let schemeArray = [];
  if (USER == "STUDENT") {
    schemeArray.push(...studentSchemeArray);
  } else if (USER == "USER") {
    schemeArray.push(...teacherSchemeArray);
  } else if (USER == "INSTITUTION") {
    schemeArray.push(...institutionSchemeArray);
  }
  const submit = () => {
    const token = localStorage.getItem("token");
    let applicationId;
    axios
      .post(
        "/application",
        {
          name: scheme,
        },
        {
          headers: {
            Authorization: token,
            USER: "USER",
          },
        }
      )
      .then((response) => {
        applicationId = response.data._id;
        axios
          .post(
            "/document",
            {
              uploadedBy: id,
              documentLink: URL,
              organisationName: org,
              organisationContact: contact,
              applicationId,
              title: "10th Marksheet",
            },
            {
              headers: {
                Authorization: token,
                USER: "USER",
              },
            }
          )
          .then((response) => console.log(response))
          .catch((error) => console.log(error));
      })
      .catch((error) => console.log(error));
    // console.log(scheme);
    const id = localStorage.getItem("id");
    // console.log(applicationId);
  };
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <SideBar />
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}
      >
        <Typography variant="h5" style={{ fontWeight: "600" }}>
          {showDropBox && (
            <>
              <InputLabel
                id="demo-simple-select-label"
                sx={{ marginTop: "30px" }}
              >
                Select Scheme
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                fullWidth
                value={scheme}
                // defaultValue={schemeArray?.length > 0 ? schemeArray[0] : ""}
                label="Student Scheme."
                style={{ marginTop: "10px" }}
                onChange={(e) => setScheme(e.target.value)}
              >
                {schemeArray?.map((scheme, idx) => {
                  return (
                    <MenuItem key={idx} value={scheme}>
                      {scheme}
                    </MenuItem>
                  );
                })}
              </Select>
            </>
          )}
          <FileUpload sideBar={false} setURL={setURL} />
          <TextField
            sx={{ marginTop: "20px" }}
            id="org"
            label="Organization Name"
            size="small"
            fullWidth
            value={org}
            onChange={(e) => setOrg(e.target.value)}
          />
          <TextField
            sx={{ marginY: "30px" }}
            id="contact"
            label="Organization Contact"
            size="small"
            fullWidth
            value={contact}
            onChange={(e) => setContact(e.target.value)}
          />
          <Button variant="contained" onClick={submit}>
            Submit
          </Button>
        </Typography>
      </Box>
    </Box>
  );
};

export default UserLogin;
