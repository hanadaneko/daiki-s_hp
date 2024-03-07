import {ThemeProvider, createTheme} from "@mui/material";

export const mainFont = ["Noto Sans JP", "sans-serif"].join(",")

export const theme = createTheme(
    {
        palette:{
            primary:{
                main: "#072136",
            },
            secondary:{
                main: "#0c3c60",
            },
            error: {
                main: "#d32f2f",
            }
        },
        components: {
            MuiTypography: {
                defaultProps : {
                    fontFamily: mainFont
                }
            }
        }
    }
)

// 既存のThemeをラップし拡張
// https://qiita.com/u_Hoshi/items/065ebd40680c73aa0485
export function OriginalTheme({ children }: { children: React.ReactNode }) {
    return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}