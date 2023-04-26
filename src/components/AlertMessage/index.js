import { Alert } from "@material-ui/lab";

export function AlertMessage({ onClose, message, severity }) {
  return (
    message && (
      <Alert severity={severity || "error"} onClose={onClose}>
        {message}
      </Alert>
    )
  );
}
