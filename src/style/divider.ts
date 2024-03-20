import { Divider, DividerTypeMap, styled } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";

export const StyledBasicDivider = styled(Divider)({
  marginTop: "16px",
  marginBottom: "16px",
  // 線の太さ
  borderWidth: "1px",
}) as OverridableComponent<DividerTypeMap<any, "hr">>;
