import styled from "@emotion/styled";
import { Stack, StackTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";

export const StyledBusinessStack = styled(Stack)(({ theme }) => ({
  padding: "0 3% 0 3%",
  backgroundColor: theme.palette.secondary.main,
})) as OverridableComponent<StackTypeMap<any, "div">>;

export const StyledMyselfStack = styled(Stack)(({ theme }) => ({
  padding: "0 3% 0 3%",
  //   backgroundColor: theme.palette.primary.main,
})) as OverridableComponent<StackTypeMap<any, "div">>;
