import { styled, keyframes, darkTheme } from "../../stitches.config";

const spinnerRotate = keyframes({
  to: { transform: "rotate(1turn)" },
});

const Spinner = styled("div", {
  width: "50px",
  padding: "8px",
  aspectRatio: 1,
  borderRadius: "50%",
  background: "$primary",
  [`.${darkTheme} &`]: {
    background: "$bodyText",
  },
  "--_m":
    "conic-gradient(#0000 10%,#000), linear-gradient(#000 0 0) content-box",
  "-webkit-mask": "var(--_m)",
  mask: "var(--_m)",
  " -webkit-mask-composite": "source-out",
  maskComposite: "substract",
  animation: `${spinnerRotate} 1s infinite linear`,
});

export default Spinner;
