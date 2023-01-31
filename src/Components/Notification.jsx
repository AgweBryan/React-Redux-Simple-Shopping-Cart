import { Alert } from "@mui/material";
import { useDispatch } from "react-redux";
import { notificationActions } from "../store/slices/notificationSlice";
const Notification = ({ type, message }) => {
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(
      notificationActions.showNotification({
        open: false,
        message: "",
        type: "",
      })
    );
  };

  return (
    <div>
      <Alert severity={type} onClose={handleClose}>
        {message}
      </Alert>
    </div>
  );
};

export default Notification;
