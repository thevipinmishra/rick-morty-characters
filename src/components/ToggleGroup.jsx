import * as ToggleGroupPrimitive from "@radix-ui/react-toggle-group";
import { styled } from "../../stitches.config";

const StyledToggleGroup = styled(ToggleGroupPrimitive.Root, {
  display: "inline-flex",
  borderRadius: 4,
});

const StyledItem = styled(ToggleGroupPrimitive.Item, {
  all: "unset",
  boxSizing: "border-box",
  backgroundColor: "$paper",
  color: "$bodyText",
  cursor: "pointer",
  height: 35,
  width: 45,
  display: "flex",
  fontSize: 15,
  lineHeight: 1,
  alignItems: "center",
  justifyContent: "center",
  marginLeft: 1,
  "&:first-child": {
    marginLeft: 0,
    borderTopLeftRadius: 4,
    borderBottomLeftRadius: 4,
  },
  "&:last-child": { borderTopRightRadius: 4, borderBottomRightRadius: 4 },
  "&:hover": { backgroundColor: "$bodyBg" },
  "&[data-state=on]": {
    backgroundColor: "$primary",
    color: "$primaryContrast",
  },
});

// Exports
export const ToggleGroup = StyledToggleGroup;
export const ToggleGroupItem = StyledItem;
