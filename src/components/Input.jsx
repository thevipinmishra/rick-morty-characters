import { styled } from "../../stitches.config";

const Input = styled("input", {
  border: 0,
  outline: 0,
  display: "block",
  width: "100%",
  fontFamily: "inherit",
  fontSize: ".9rem",
  borderRadius: ".25rem",
  padding: ".75rem 1rem",
  boxShadow:
    "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px",
  backgroundColor: "#fff",
  "&:focus-visible": {
    outline: "2px dotted $primary",
  },
});

export default Input;
