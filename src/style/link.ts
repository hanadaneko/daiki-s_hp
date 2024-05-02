import { styled, Link, LinkBaseProps, LinkTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";

export const StyledBasicLink = styled(Link)({
  // 線の太さ
  borderWidth: "1px",
  // 線の色
  borderColor: "#0111111",
  //   fontWeight: "bold",
}) as OverridableComponent<LinkTypeMap<any, "link">>;
