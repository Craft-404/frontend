import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Select,
  Box,
  Button,
  IconButton,
  InputLabel,
  TextField,
  Typography,
  MenuItem,
} from "@mui/material";
import { useState } from "react";
import axios from "../../axiosInstance";
import Toast from "../../Toast/Toast";
import { useNavigate } from "react-router-dom";

const SignUpForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState();
  const [severity, setSeverity] = useState();
  const [user, setUser] = useState("EMPLOYEE");
  const navigate = useNavigate();
  const SignUp = () => {
    if (!email || !password) {
      setShowToast(true);
      setToastMessage("Email and Password are required");
      setSeverity("error");
      return;
    }
    if (user == "EMPLOYEE") {
      localStorage.setItem("user", "EMPLOYEE");
      console.log(user);
      axios
        .post("/auth/login", { email, password })
        .then((response) => {
          // localStorage.clear();
          localStorage.setItem("token", response.data.token);
          localStorage.setItem("user", "EMPLOYEE");
          localStorage.setItem("designation", response.data.designationId);
          localStorage.setItem("bureau", response.data.bureau);
          navigate("/createemployee");
        })
        .catch((error) => console.log(error));
    } else {
      // localStorage.clear();
      localStorage.setItem("user", "USER");
      localStorage.setItem("userType", user);
      axios
        .post("/user/login", { email, password })
        .then((response) => {
          localStorage.setItem("token", response.data.token);
          localStorage.setItem("designation", response.data.designationId);
          localStorage.setItem("bureau", response.data.bureau);
          localStorage.setItem("id", response.data.user._id);
          navigate("/userlogin");
        })
        .catch((error) => console.log(error));
    }
  };
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        padding: 10,
      }}
    >
      <Toast
        showToast={showToast}
        setShowToast={setShowToast}
        message={toastMessage}
        severity={severity}
      />
      <Typography variant="h6">Login into Sainyojit! 🎉</Typography>
      <Box sx={{ display: "flex", flexDirection: "column", marginTop: "30px" }}>
        <Box sx={{ marginTop: "10px" }}>
          <TextField
            type="email"
            id="email"
            label="Email Address"
            size="small"
            fullWidth
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Box>
        <Box sx={{ marginTop: "10px" }}>
          <TextField
            type={showPassword ? "text" : "password"}
            id="password"
            label="Password"
            size="small"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            fullWidth
            InputProps={{
              endAdornment: (
                <IconButton
                  onClick={() =>
                    setShowPassword((showPassword) => !showPassword)
                  }
                  onMouseDown={(e) => e.preventDefault()}
                >
                  {!showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              ),
            }}
          />
          <InputLabel id="demo-simple-select-label" sx={{ marginTop: "30px" }}>
            Select Roll
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            fullWidth
            value={user}
            label="Student Scheme."
            style={{ marginTop: "10px" }}
            onChange={(e) => setUser(e.target.value)}
          >
            {["EMPLOYEE", "FACULTY", "STUDENT", "INSTITUTION"].map(
              (scheme, idx) => {
                return (
                  <MenuItem key={idx} value={scheme}>
                    {scheme}
                  </MenuItem>
                );
              }
            )}
          </Select>
          <Box sx={{ marginTop: "20px" }}>
            <Button variant="contained" fullWidth onClick={SignUp}>
              SIGN IN
            </Button>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "10px",
            }}
          >
            <Typography variant="subtitle1">Dont have an account?</Typography>
            <Button onClick={() => navigate("/signup")}>SIGN UP</Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default SignUpForm;
