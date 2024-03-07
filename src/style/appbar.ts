import { AppBar,  AppBarTypeMap, styled } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";

export const StyledHeaderAppBar = styled(AppBar)(({theme}) => ({
    padding: "0",
    margin: "0",
    backgroundColor: theme.palette.primary.main
})) as OverridableComponent<AppBarTypeMap<any, "span">>;