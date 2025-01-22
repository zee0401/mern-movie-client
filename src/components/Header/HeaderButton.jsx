import { Button, styled } from "@mui/material";
import BasicModal from "../Login/LoginModal";
import React from "react";

const WrapperButton = styled(Button)`
  background: white;
  color: #ac137e;
  margin: 5px;
  border-radius: 5px;
  transition: background 0.3s, color 0.3s;

  &:hover {
    background: #9c1657;
    color: #f9f9f9;
  }
`;

const HeaderButton = ({ search, login }) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div>
      <WrapperButton>{search}</WrapperButton>
      <WrapperButton onClick={handleOpen} color="inherit">
        {" "}
        {login}
      </WrapperButton>
      <BasicModal
        open={open}
        onClose={handleClose}
        onOpen={handleOpen}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      />
    </div>
  );
};

export default HeaderButton;
