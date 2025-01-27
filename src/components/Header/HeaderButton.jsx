import { Button, styled } from "@mui/material";
import BasicModal from "../Login/LoginModal"; // Assuming this is your login modal
import React from "react";
import { useSelector } from "react-redux";

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

const HeaderButton = ({ search, adminLogin }) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const { isAuthenticated } = useSelector((state) => state.auth);

  return (
    <div>
      <WrapperButton>{search}</WrapperButton>

      {/* Button text dynamically changes based on authentication status */}
      <WrapperButton onClick={handleOpen} color="inherit">
        {isAuthenticated ? "View Dashboard" : "Login / Admin Login"}
      </WrapperButton>

      {/* BasicModal is conditionally opened based on the state of 'open' */}
      {!isAuthenticated && (
        <BasicModal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        />
      )}
    </div>
  );
};

export default HeaderButton;
