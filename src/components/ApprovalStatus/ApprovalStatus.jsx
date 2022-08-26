import {
  CssBaseline,
  Step,
  StepLabel,
  Stepper,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import { useEffect, useState } from "react";
import axios from "../axiosInstance";
import SideBar from "../SideBar/SideBar";
import UserLogin from "../UserLogin/UserLogin";

const steps = ["33%", "67%", "Completed"];

const ApprovalStatus = () => {
  const [data, setData] = useState();
  const [revert, setRevert] = useState(false);
  const token = localStorage.getItem("token");
  const id = localStorage.getItem("id");
  useEffect(() => {
    axios
      .get(`/ticket/user/approval/`, {
        headers: {
          Authorization: token,
          USER: "USER",
        },
      })
      .then((response) => {
        console.log(response);
        setData(response.data);
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <>
      <Box sx={{ display: "flex", marginBottom: "10px" }}>
        <CssBaseline />
        <SideBar />
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            bgcolor: "background.default",
            p: 3,
            marginTop: "10px",
          }}
        >
          {data &&
            data?.map((dat) => {
              return (
                <Box
                  sx={{ display: "flex", gap: "50px", flexDirection: "column" }}
                >
                  <Typography variant="subtitle1" style={{ fontWeight: "600" }}>
                    {dat.status != -1 ? dat.scheme.name : "Rejected"}
                  </Typography>
                  {dat.status != -1 && (
                    <Stepper activeStep={dat.status - 1} alternativeLabel>
                      {steps.map((label) => (
                        <Step key={label}>
                          <StepLabel>{label}</StepLabel>
                        </Step>
                      ))}
                    </Stepper>
                  )}
                </Box>
              );
            })}
        </Box>
      </Box>
      {revert && (
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Typography
            variant="h5"
            sx={{ marginLeft: "270px", marginBottom: "1px" }}
          >
            Please Reupload the previous document
          </Typography>
          <UserLogin showDropBox={false} />
        </Box>
      )}
    </>
  );
};

export default ApprovalStatus;
