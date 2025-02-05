import React, { useEffect } from "react";
import { Snackbar, Alert } from "@mui/material";

const ToastNotification = ({ open, message, severity, onClose }) => {
  return (
    <Snackbar
      open={open}
      onClose={onClose}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      autoHideDuration={5000}
    >
      <Alert onClose={onClose} severity={severity} variant="filled">
        {message}
      </Alert>
    </Snackbar>
  );
};

export default ToastNotification;
