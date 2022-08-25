import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Box, Button, IconButton, TextField, Typography } from "@mui/material";
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
  const navigate = useNavigate();
  const SignUp = () => {
    if (!email || !password) {
      setShowToast(true);
      setToastMessage("Email and Password are required");
      setSeverity("error");
      return;
    }
    axios
      .post("/auth/login", { email, password })
      .then((response) => {
        console.log(response.data.token);
        navigate("/createemployee");
      })
      .catch((error) => console.log(error));
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
          <Box sx={{ marginTop: "20px" }}>
            <Button variant="contained" fullWidth onClick={SignUp}>
              SIGN IN
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default SignUpForm;
