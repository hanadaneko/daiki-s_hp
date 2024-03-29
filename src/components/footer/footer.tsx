import { StyledHeaderAppBar } from "@/style/appbar";
import { MarginY8 } from "@/style/spacing";
import { StyledCopyRightTypograghy } from "@/style/typograghy";
import { Stack } from "@mui/material";

export default function Footer() {
  return (
    <Stack textAlign="center">
      <StyledHeaderAppBar position="static">
        <MarginY8 />
        <StyledCopyRightTypograghy>
          © 2024 Gondo Daiki
        </StyledCopyRightTypograghy>
        <MarginY8 />
      </StyledHeaderAppBar>
    </Stack>
  );
}
