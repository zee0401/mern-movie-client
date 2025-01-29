import { Button, styled } from "@mui/material";
import BasicModal from "../Login/LoginModal"; // Assuming this is your login modal
import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router";
import { useLocation } from "react-router-dom";

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

const HeaderButton = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const location = useLocation();

  const isAdminLocation = location.pathname.includes("/admin");

  const { isAuthenticated } = useSelector((state) => state.auth);

  return (
    <div>
      {/* <WrapperButton>{search}</WrapperButton> */}

      {isAuthenticated && isAdminLocation && (
        <WrapperButton>Add Movie</WrapperButton>
      )}
      {isAuthenticated && !isAdminLocation && (
        <WrapperButton>
          <Link
            to="/admin/all-movies"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            View Dashboard
          </Link>
        </WrapperButton>
      )}
      {!isAuthenticated && (
        <WrapperButton onClick={handleOpen} color="inherit">
          Admin Login
        </WrapperButton>
      )}

      {isAuthenticated && (
        <WrapperButton onClick={handleOpen} color="inherit">
          Logout
        </WrapperButton>
      )}

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
