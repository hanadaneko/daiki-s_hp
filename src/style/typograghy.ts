import { Typography, TypographyTypeMap, styled } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";

export const StyledHeaderItemsPcTypograghy = styled(Typography)(({theme}) => ({
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: "18px",
})) as OverridableComponent<TypographyTypeMap<any, "span">>;