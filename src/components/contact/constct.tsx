import { StyledBasicDivider } from "@/style/divider";
import { StyledBasicLink } from "@/style/link";
import { MarginY32 } from "@/style/spacing";
import { StyledContactFormTitleTypograghy } from "@/style/typograghy";
import { Stack } from "@mui/material";

export default function Contact() {
  return (
    <Stack>
      <StyledBasicDivider />
      <MarginY32 />
      <Stack alignItems="center">
        <StyledContactFormTitleTypograghy id="contact">
          Contact
        </StyledContactFormTitleTypograghy>

        <MarginY32 />
        <StyledBasicLink href="https://link-gk.com/contact/">
          お問い合わせはこちら
        </StyledBasicLink>
      </Stack>
    </Stack>
  );
}
