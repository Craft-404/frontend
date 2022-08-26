import DragHandleIcon from "@mui/icons-material/DragHandle";
import { Card, CardContent, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Pill from "../Pill/Pill";

const DashBoardCard = ({
  title,
  subtitle,
  token,
  onClickCancel,
  onClickComplete,
  show = true,
  status = "",
}) => {
  return (
    <Card sx={{ marginTop: "20px" }}>
      <CardContent>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="h6" style={{ fontWeight: "600" }}>
            {title}
          </Typography>
          <DragHandleIcon
            style={{ color: "#F4AE3D", marginLeft: "20px", marginTop: "4px" }}
          />
        </Box>
        <Box sx={{ marginTop: "20px" }}>
          <Typography variant="subtitle" style={{ color: "#58AAF3" }}>
            {subtitle}
          </Typography>
        </Box>
        {show && (
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "20px",
              gap: "20px",
            }}
          >
            <Pill text={"Cancel"} onClick={onClickCancel} />
            <Pill text={"Complete"} red={false} onClick={onClickComplete} />
            <Typography variant="subtitle" style={{ color: "#B3B3B3" }}>
              {token}
            </Typography>
          </Box>
        )}
        {!show && (
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "20px",
              gap: "20px",
            }}
          >
            <Typography variant="subtitle" style={{ color: "#B3B3B3" }}>
              Status:- {status}
            </Typography>
          </Box>
        )}
      </CardContent>
    </Card>
  );
};

export default DashBoardCard;
