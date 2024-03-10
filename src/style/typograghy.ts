import { Typography, TypographyTypeMap, styled } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";

export const StyledHeaderItemsPcTypograghy = styled(Typography)(
  ({ theme }) => ({
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: "18px",
  })
) as OverridableComponent<TypographyTypeMap<any, "span">>;

export const StyledBusinessIntroductionTitleTypograghy = styled(Typography)(
  ({ theme }) => ({
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: "24px",
  })
) as OverridableComponent<TypographyTypeMap<any, "h2">>;
