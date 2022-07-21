import { createStitches } from "@stitches/react";
import { blue, blueDark } from "@radix-ui/colors";

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
      ...blue,
      blueDark,
      primary: "$blue10",
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
