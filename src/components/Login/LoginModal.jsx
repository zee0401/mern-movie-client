import Modal from "@mui/material/Modal";
import LoginForm from "./LoginForm";

export default function LoginModal({ open, onClose }) {
  return (
    <div>
      <Modal
        open={open}
        onClose={onClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <LoginForm onClose={onClose} />
      </Modal>
    </div>
  );
}
