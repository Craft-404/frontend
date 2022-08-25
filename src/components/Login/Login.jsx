import { Box } from "@mui/system";
import SignUpForm from "./SignUpForm/SignUpForm";
import LoginImage from "../../assets/images/LoginImage.png";

const Login = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        height: "100vh",
        maxWidth: "100%",
      }}
    >
      <Box
        sx={{
          display: "grid",
          placeItems: "center",
          padding: 15,
        }}
      >
        <SignUpForm />
      </Box>
      <Box
        sx={{
          display: "grid",
          placeItems: "center",
          background: "#F3F5F9",
          minWidth: "50%",
        }}
      >
        <img src={LoginImage} alt="LoginImage" />
      </Box>
    </Box>
  );
};

export default Login;
