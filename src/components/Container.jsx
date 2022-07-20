import { styled } from "../../stitches.config";

const Container = styled("div", {
  width: "100%",
  paddingInline: "1.2rem",
  marginInline: "auto",
  "@md": {
    maxInlineSize: "720px",
  },
  "@lg": {
    maxInlineSize: "960px",
  },
});

export default Container;
