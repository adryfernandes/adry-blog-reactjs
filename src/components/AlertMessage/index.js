import { Alert } from "@material-ui/lab";

export function AlertMessage({ onClose, message, isSuccess }) {
  const severity = isSuccess ? "success" : "error";

  return (
    message && (
      <Alert severity={severity} onClose={onClose}>
        {message}
      </Alert>
    )
  );
}
