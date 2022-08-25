import { Alert, Snackbar } from "@mui/material";

const Toast = ({ showToast, setShowToast, severity, message }) => {
  return (
    <Snackbar
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      open={showToast}
      autoHideDuration={3000}
      onClose={() => setShowToast(false)}
    >
      <Alert
        onClose={() => setShowToast(false)}
        severity={severity}
        sx={{ width: "100%" }}
      >
        {message}
      </Alert>
    </Snackbar>
  );
};

export default Toast;
