import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Box,
  Button,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../axiosInstance";

const NewUserSignInForm = () => {
  const [email, setEmail] = useState();
  const [name, setName] = useState();
  const [phone, setPhone] = useState();
  const [password, setPassword] = useState();
  const [showPassword, setShowPassword] = useState();
  const [date, setDate] = useState();
  const [user, setUser] = useState("EMPLOYEE");
  const navigate = useNavigate();
  const signUp = () => {
    axios
      .post("/user", {
        email,
        name,
        phone,
        password,
        dob: date,
        userType: user,
      })
      .then((response) => {
        localStorage.setItem("user", user);
        navigate("/userlogin");
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
      <Typography variant="h6">Sign In to Sainyojit! 🎉</Typography>
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
          id="name"
          label="Name"
          size="small"
          fullWidth
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </Box>
      <Box sx={{ marginTop: "10px" }}>
        <TextField
          id="phone"
          label="Phone"
          size="small"
          fullWidth
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
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
                onClick={() => setShowPassword((showPassword) => !showPassword)}
                onMouseDown={(e) => e.preventDefault()}
              >
                {!showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            ),
          }}
        />
      </Box>
      <Box sx={{ marginTop: "10px" }}>
        <TextField
          type="date"
          id="date"
          size="small"
          fullWidth
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </Box>
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
        {["FACULTY", "STUDENT", "INSTITUTION"].map((scheme, idx) => {
          return (
            <MenuItem key={idx} value={scheme}>
              {scheme}
            </MenuItem>
          );
        })}
      </Select>
      <Button variant="contained" sx={{ marginTop: "10px" }} onClick={signUp}>
        SIGN UP
      </Button>
    </Box>
  );
};

export default NewUserSignInForm;
