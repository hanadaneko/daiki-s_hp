import { Stack } from "@mui/material";
import BusinessIntroduction from "@/components/business/introduction/businessIntroduction";
import BusinessLogicIntroduction from "@/components/business/logicIntroduction/businessLogicIntroduction";
import { MarginY32, MarginY64 } from "@/style/spacing";
import { StyledBasicDivider } from "@/style/divider";
import { StyledBusinessStack } from "@/style/stack";
import { StyledBusinessIntroductionTitleTypograghy } from "@/style/typograghy";

export default function Business() {
  return (
    <StyledBusinessStack>
      <MarginY32 />
      <Stack alignItems="center">
        <StyledBusinessIntroductionTitleTypograghy id="business">
          Business
        </StyledBusinessIntroductionTitleTypograghy>
      </Stack>
      <MarginY32 />
      <BusinessIntroduction />
      <MarginY64 />

      <StyledBasicDivider />
      <MarginY32 />

      <BusinessLogicIntroduction />
      <MarginY64 />
    </StyledBusinessStack>
  );
}
