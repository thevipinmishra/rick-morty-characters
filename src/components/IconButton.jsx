import { styled } from "../../stitches.config";

const IconButton = styled("button", {
  border: "0",
  outline: 0,
  backgroundColor: "transparent",
  cursor: "pointer",
  boxSizing: "border-box",
  $$size: "30px",
  height: "$$size",
  width: "$$size",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontFamily: "inherit",
  flexShrink: 0,
  "&:focus-visible": {
    outline: "2px dotted $primary",
  },
});

export default IconButton;
