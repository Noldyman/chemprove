import { atom } from "recoil";
import { INotification } from "../models/notifications";

export const notificationState = atom({
  key: "Notification",
  default: {
    isShown: false,
    message: "",
    severity: "info",
  } as INotification,
});
