import Modal from "@mui/material/Modal";
import { useState } from "react";
import AddMovieForm from "./AddMovieForm";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const MovieUpdateModal = ({ open, movie, close }) => {
  return (
    <div>
      <Modal
        open={open}
        onClose={close}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div style={style}>
          <AddMovieForm />
        </div>
      </Modal>
    </div>
  );
};

export default MovieUpdateModal;
