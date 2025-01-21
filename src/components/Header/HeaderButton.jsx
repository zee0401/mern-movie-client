import { Button, styled } from "@mui/material";

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
  return (
    <div>
      <WrapperButton>{search}</WrapperButton>
      <WrapperButton color="inherit"> {login}</WrapperButton>
    </div>
  );
};

export default HeaderButton;
