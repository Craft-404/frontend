import {
  Box,
  Button,
  Card,
  CardContent,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import axios from "../../axiosInstance";
import Toast from "../../Toast/Toast";

const RaiseTicketForm = () => {
  const [title, setTitle] = useState();
  const [remarks, setRemarks] = useState();
  const [status, setStatus] = useState();
  const [description, setDescription] = useState();
  const [date, setDate] = useState();
  const [ticketType, setTicketType] = useState("Task");
  const [priority, setPriority] = useState(3);
  const [showToast, setShowToast] = useState(false);
  const [message, setMessage] = useState();
  const [severity, setSeverity] = useState();
  const [users, setAllUsers] = useState();
  const [query, setQuery] = useState(); 
  const serach = () => {
    const token = localStorage.getItem("token");
    axios
      .get(`/employee/search?q=${query}`, {
        headers: {
          Authorization: token,
          USER: "EMPLOYEE",
        },
      })
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
  };
  const submitData = () => {
    const token = localStorage.getItem("token");
    axios
      .post(
        "/ticket",
        {
          title,
          description,
          remarks,
          priority,
          category: ticketType,
          assignees: ["6307d9f949b987ebca06f819"],
        },
        {
          headers: {
            Authorization: token,
            USER: "EMPLOYEE",
          },
        }
      )
      .then((response) => console.log(response.data))
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
            🎫 Raise A Ticket
          </Typography>
          <TextField
            id="title"
            label="Title"
            size="small"
            fullWidth
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            sx={{ marginTop: "30px" }}
          />
          <TextField
            id="description"
            label="Description"
            size="small"
            fullWidth
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            sx={{ marginTop: "30px" }}
          />
          <TextField
            id="remarks"
            label="Remarks"
            size="small"
            fullWidth
            value={remarks}
            onChange={(e) => setRemarks(e.target.value)}
            sx={{ marginTop: "30px" }}
          />
          <TextField
            type="date"
            id="dueDate"
            size="small"
            fullWidth
            value={date}
            onChange={(e) => setDate(e.target.value)}
            sx={{ marginTop: "30px" }}
          />
          <Box sx={{ display: "flex", gap: "20px" }}>
            <TextField
              id="query"
              label="Assignee"
              size="small"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              sx={{ marginTop: "30px" }}
            />
            <Button
              variant="contained"
              sx={{ marginTop: "30px" }}
              onClick={serach}
            >
              Search
            </Button>
          </Box>
          <InputLabel id="demo-simple-select-label" sx={{ marginTop: "30px" }}>
            Priority
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            fullWidth
            value={priority}
            label="Priority"
            style={{ marginTop: "10px" }}
            onChange={(e) => setPriority(e.target.value)}
          >
            {[1, 2, 3, 4, 5].map((_, idx) => {
              return (
                <MenuItem key={idx} value={idx + 1}>
                  {idx + 1}
                </MenuItem>
              );
            })}
          </Select>
          <InputLabel id="demo-simple-select-label" sx={{ marginTop: "30px" }}>
            Ticket Type
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            fullWidth
            value={ticketType}
            label="Tickettype"
            defaultValue={"Task"}
            style={{ marginTop: "10px" }}
            onChange={(e) => setTicketType(e.target.value)}
          >
            {["Approval", "Task"].map((ticket, idx) => {
              return (
                <MenuItem key={idx} value={ticket}>
                  {ticket}
                </MenuItem>
              );
            })}
          </Select>
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

export default RaiseTicketForm;
