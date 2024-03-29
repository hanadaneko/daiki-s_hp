import { Button, ButtonTypeMap, ExtendButtonBase, styled } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";

export const StyledHeaderItemsPcButton = styled(Button)({
  color: "#fff",
  backgroundColor: "#072136",
  "&:hover": {
    backgroundColor: "#072136",
  },
}) as ExtendButtonBase<ButtonTypeMap<any, "button">>;
