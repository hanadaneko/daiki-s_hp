import styled from "@emotion/styled";
import {
  Card,
  CardContent,
  CardContentTypeMap,
  CardTypeMap,
} from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";

export const StyledBusinessIntroductionCard = styled(Card)({
  width: "100%",
  height: "98%",
  marginBottom: "16px",
  display: "flex",
  flexDirection: "column",
  flexGrow: 1,
  boxShadow: "0px 0px 0px 0px rgba(0, 0, 0, 0.2)",
}) as OverridableComponent<CardTypeMap<any, "div">>;

export const StyledBusinessIntroductionCardContent = styled(CardContent)({
  padding: "20px",
  display: "1 1 auto",
  flexDirection: "column",
}) as OverridableComponent<CardContentTypeMap<any, "div">>;
