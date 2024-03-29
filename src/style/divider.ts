import { Divider, DividerTypeMap, styled } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";

export const StyledBasicDivider = styled(Divider)({
  marginTop: "16px",
  marginBottom: "16px",
  // 線の太さ
  borderWidth: "1px",
}) as OverridableComponent<DividerTypeMap<any, "hr">>;

export const StyledHeaderMenuDivider = styled(Divider)({
  marginTop: "5px",
  marginBottom: "16px",
  // 線の太さ
  borderWidth: "1px",
  // 線の色
  // borderColor: "#000000",
}) as OverridableComponent<DividerTypeMap<any, "hr">>;

export const StyledverticalDivider = styled(Divider)({
  // 線の太さ
  borderWidth: "1px",
  // 線の色
  // borderColor: "#000000",
}) as OverridableComponent<DividerTypeMap<any, "hr">>;
