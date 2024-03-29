import { StyledBasicDivider } from "@/style/divider";
import { StyledMyselfIntroductionTypograghy } from "@/style/typograghy";
import { Stack } from "@mui/material";

interface SelfIntroductionProps {
  message: string;
}

export default function SelfIntroduction(message: SelfIntroductionProps) {
  return (
    <Stack>
      <StyledBasicDivider>message</StyledBasicDivider>
      <Stack sx={{ marginX: "5%" }}>
        <StyledMyselfIntroductionTypograghy>
          {message.message}
        </StyledMyselfIntroductionTypograghy>
      </Stack>
    </Stack>
  );
}
