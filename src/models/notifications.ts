type Severities = "info" | "success" | "warning" | "error";

export interface INotification {
  isShown: boolean;
  message: string;
  severity: Severities;
}
