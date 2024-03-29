import { ThemeProvider, createTheme } from "@mui/material";
import "@fontsource/noto-sans-jp";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#072136",
    },
    secondary: {
      main: "#FFFEE2",
    },
    error: {
      main: "#d32f2f",
    },
  },
  typography: {
    fontFamily: "Noto Sans JP",
  },
});

// 既存のThemeをラップし拡張
// https://qiita.com/u_Hoshi/items/065ebd40680c73aa0485
export function OriginalMuiTheme({ children }: { children: React.ReactNode }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
