import { Box } from "@mui/material";
import LoginImage from "../../assets/images/LoginImage.png";
import NewUserSignInForm from "../NewUserSignInForm/NewUserSignInForm";

const SignUp = () => {
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
        <NewUserSignInForm />
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

export default SignUp;
