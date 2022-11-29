import { Alert, Snackbar } from "@mui/material";
import { useRecoilState } from "recoil";
import { notificationState } from "../services/notifications";

export const Notification = () => {
  const [notification, setNotification] = useRecoilState(notificationState);

  const handleClose = () => {
    setNotification((prevValue) => ({ ...prevValue, isShown: false }));
  };

  return (
    <Snackbar
      open={notification.isShown}
      autoHideDuration={2000}
      onClose={handleClose}
    >
      <Alert
        variant="filled"
        onClose={handleClose}
        severity={notification.severity}
      >
        {notification.message}
      </Alert>
    </Snackbar>
  );
};
