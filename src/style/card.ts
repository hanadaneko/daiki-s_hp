import styled from "@emotion/styled";
import {
  Card,
  CardContent,
  CardContentTypeMap,
  CardTypeMap,
} from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";

// BusinessIntroduction
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

// media
export const StyledMediaCard = styled(Card)({
  width: "100%",
  height: "98%",
  // marginBottom: "16px",
  display: "flex",
  flexDirection: "column",
  flexGrow: 1,
  boxShadow: "0px 1px 1px 0px rgba(0, 0, 0, 0.2)",
}) as OverridableComponent<CardTypeMap<any, "div">>;

export const StyledMediaCardContent = styled(CardContent)({
  paddingTop: "10px",
  paddingBottom: "10px",
  paddingLeft: "5px",
  paddingRight: "5px",
  display: "1 1 auto",
  flexDirection: "column",
  ":last-child": {
    paddingBottom: "10px",
  },
}) as OverridableComponent<CardContentTypeMap<any, "div">>;
