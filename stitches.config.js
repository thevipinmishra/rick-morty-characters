import { createStitches } from "@stitches/react";
import { blue, gray, mauveDark } from "@radix-ui/colors";

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
      ...gray,
      ...mauveDark,
      primary: "$blue9",
      primaryContrast: "$gray1",
      primaryDisabled: "$blue4",
      bodyBg: "$gray2",
      card: "$gray1",
      bodyText: "$gray12",
      textLight: "$gray11",
      paper: "$gray1",
    },
  },
  media: {
    sm: "(min-width: 576px)",
    md: "(min-width: 768px)",
    lg: " (min-width: 992px)",
  },
});

export const darkTheme = createTheme({
  colors: {
    primary: "$blue12",
    primaryContrast: "$gray1",
    primaryDisabled: "$blue4",
    bodyBg: "$mauve4",
    card: "$mauve1",
    bodyText: "$mauve12",
    textLight: "$mauve11",
    paper: "$mauve3",
  },
});
