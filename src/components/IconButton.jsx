import { styled, darkTheme } from "../../stitches.config";

const IconButton = styled("button", {
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
  border: "1px solid transparent",
  borderRadius: "4px",
  "&:focus-visible": {
    outline: "2px dotted $primary",
  },

  "&:disabled": {
    cursor: "not-allowed",
    opacity: ".5",
  },

  variants: {
    variant: {
      filled: {
        backgroundColor: "$primary",
        color: "$card",

        [`.${darkTheme} &`]: {
          color: "$bodyText",
        },
      },
      outlined: {
        backgroundColor: "$card",
        color: "$primary",
        borderColor: "$primary",

        [`.${darkTheme} &`]: {
          borderColor: "transparent",
          color: "$bodyText",
        },
      },
      plane: {
        backgroundColor: "$paper",
      },
    },
  },

  defaultVariants: {
    variant: "plane",
  },
});

export default IconButton;
