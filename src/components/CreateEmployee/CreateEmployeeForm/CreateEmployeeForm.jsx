import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Button,
  Card,
  CardContent,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import { useEffect, useState } from "react";
import axios from "../../axiosInstance";
import Toast from "../../Toast/Toast";

const CreateEmployeeForm = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [phone, setPhone] = useState();
  const [userName, setUserName] = useState();
  const [name, setName] = useState();
  const [date, setDate] = useState();
  const [showPassword, setShowPassword] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [message, setMessage] = useState();
  const [severity, setSeverity] = useState();
  const [designation, setDesignation] = useState();
  const [bureau, setBerau] = useState();
  const token = localStorage.getItem("token");
  const designationArray = [
    {
      id: "630749082d9754bace7d6d03",
      name: "Admin",
    },
    {
      id: "630749082d9754bace7d6d02",
      name: "Level 3",
    },
    {
      id: "630749082d9754bace7d6d01",
      name: "Level 2",
    },
    {
      id: "630749082d9754bace7d6d00",
      name: "Level 1",
    },
  ];

  const bureauArray = [
    { id: "6306fdce5e6d5b3c5355535c", name: "Administration" },
    { id: "6306fdce5e6d5b3c5355535e", name: "Approval" },
    { id: "6306fdce5e6d5b3c5355535d", name: "Finance" },
  ];
  const submitData = () => {
    const token = localStorage.getItem("token");
    axios
      .post(
        "/auth",
        {
          email,
          password,
          phone,
          username: userName,
          name,
          daetOfJoining: date,
          designationId: designation,
          bureauId: bureau,
        },
        {
          headers: {
            Authorization: token,
            USER: "EMPLOYEE",
          },
        }
      )
      .then((response) => {
        setShowToast(true);
        setMessage("Employee Created Successfully");
        setSeverity("success");
        setEmail();
        setPassword();
        setPhone();
        setUserName();
        setDate();
      })
      .catch((error) => console.log(error));
  };
  return (
    <Box
      sx={{
        display: "grid",
        placeItems: "center",
        margin: "auto",
        height: "100vh",
      }}
    >
      <Toast
        showToast={showToast}
        setShowToast={setShowToast}
        message={message}
        severity={severity}
      />
      <Card sx={{ maxWidth: "53%", padding: "50px", paddingBottom: "10px" }}>
        <CardContent>
          <Typography variant="h5" style={{ fontWeight: "600" }}>
            💼 Create new employee!
          </Typography>
          <TextField
            id="email"
            label="Email"
            size="small"
            fullWidth
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            sx={{ marginTop: "30px" }}
          />
          <TextField
            type={showPassword ? "text" : "password"}
            sx={{ marginTop: "30px" }}
            id="password"
            label="Create Password"
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
          <TextField
            id="name"
            label="Name"
            size="small"
            fullWidth
            value={name}
            onChange={(e) => setName(e.target.value)}
            sx={{ marginTop: "30px" }}
          />
          <TextField
            id="phone"
            label="Phone"
            size="small"
            fullWidth
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            sx={{ marginTop: "30px" }}
          />
          <TextField
            id="username"
            label="Username"
            size="small"
            value={userName}
            fullWidth
            onChange={(e) => setUserName(e.target.value)}
            sx={{ marginTop: "30px" }}
          />
          <TextField
            type="date"
            id="email"
            size="small"
            fullWidth
            value={date}
            onChange={(e) => setDate(e.target.value)}
            sx={{ marginTop: "30px" }}
          />
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <InputLabel
              id="demo-simple-select-label"
              sx={{ marginTop: "30px" }}
            >
              Designation
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              fullWidth
              value={designation}
              label="Student Scheme."
              style={{ marginTop: "10px", width: "400px" }}
              onChange={(e) => setDesignation(e.target.value)}
            >
              {designationArray?.map((scheme, idx) => {
                return (
                  <MenuItem key={idx} value={scheme.id}>
                    {scheme.name}
                  </MenuItem>
                );
              })}
            </Select>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <InputLabel
              id="demo-simple-select-label"
              sx={{ marginTop: "30px" }}
            >
              Bureau
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={bureau}
              label="Student Scheme."
              style={{ marginTop: "10px", width: "400px" }}
              onChange={(e) => setBerau(e.target.value)}
            >
              {bureauArray?.map((scheme, idx) => {
                return (
                  <MenuItem key={idx} value={scheme.id}>
                    {scheme.name}
                  </MenuItem>
                );
              })}
            </Select>
          </Box>
          <Button
            onClick={submitData}
            variant="contained"
            sx={{ marginTop: "30px", backgroundColor: "#0082F5" }}
          >
            Submit
          </Button>
        </CardContent>
      </Card>
    </Box>
  );
};
export default CreateEmployeeForm;
