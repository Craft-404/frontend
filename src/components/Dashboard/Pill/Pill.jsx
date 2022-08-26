import { Box, Typography } from "@mui/material";

const Pill = ({ text, onClick, red = true }) => {
  return (
    <Box
      sx={{
        width: "85px",
        height: "33px",
        background: red ? "#FFE5E6" : "#E1F5E0",
        display: "grid",
        placeItems: "center",
        cursor: "pointer",
      }}
      onClick={onClick}
    >
      <Typography
        variant="body1"
        style={{
          fontWeight: "600",
          fontSize: "14px",
          color: red ? "#DD1313" : "#03A113",
        }}
      >
        {text}
      </Typography>
    </Box>
  );
};

export default Pill;
