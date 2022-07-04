import { styled } from "../../stitches.config";

const Stack = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: 0,

  variants: {
    gap: {
      1: {
        gap: "1rem",
      },
      2: {
        gap: "2rem",
      },
      3: {
        gap: "3rem",
      },
      4: {
        gap: "4rem",
      },
      5: {
        gap: "5rem",
      },
    },
    direction: {
      row: {
        flexDirection: "row",
        alignItems: "center",
      },
    },
  },
});

export default Stack;
