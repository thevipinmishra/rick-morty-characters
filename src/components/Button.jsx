import { styled } from "../../stitches.config";

const Button = styled("button", {
  all: "unset",
  boxSizing: "border-box",

  /* A pseudo-class selector. It is used to select elements with a specific state. */
  "&:disabled": {
    cursor: "default",
    pointerEvents: "none",
    backgroundColor: "#ddd",
    color: "#ccc",
  },

  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  gap: ".5em",
  fontFamily: "inherit",
  fontSize: "1rem",
  padding: ".8rem 1.75rem",
  cursor: "pointer",
  borderRadius: ".4rem",
  backgroundColor: "#2980b9",
  color: "#fff",

  variants: {
    size: {
      small: {
        fontSize: ".8rem",
        padding: ".4rem 1rem",
      },
    },
  },
});

export default Button;
