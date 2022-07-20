import { createStitches } from "@stitches/react";

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  theme: {
    fonts: {
      sansSerif: "Outfit, sans-serif",
    },
    colors: {
      primary: "#2980b9",
    },
  },
  media: {
    sm: "(min-width: 576px)",
    md: "(min-width: 768px)",
    lg: " (min-width: 992px)",
  },
  utils: {
    marginX: (value) => ({ marginLeft: value, marginRight: value }),
  },
});
