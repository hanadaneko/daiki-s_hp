import { StyledBasicDivider } from "@/style/divider";
import { MarginY32 } from "@/style/spacing";
import { StyledContactFormTitleTypograghy } from "@/style/typograghy";
import { Stack } from "@mui/material";
import { useEffect } from "react";

export default function Contact() {
  useEffect(() => {
    const head = document.getElementsByTagName("head")[0] as HTMLElement;
    const script = document.createElement("script");
    script.src = "https://sdk.form.run/js/v2/embed.js";
    head.appendChild(script);
    return () => {
      head.removeChild(script);
    };
  }, []);
  return (
    <Stack>
      {/*  フォームラン (お問い合わせフォーム) */}
      <StyledBasicDivider />
      <MarginY32 />
      <Stack alignItems="center">
        <StyledContactFormTitleTypograghy id="contact">
          Contact
        </StyledContactFormTitleTypograghy>
      </Stack>
      <div
        className="formrun-embed"
        data-formrun-form="@hanadaneko--hATCHzAsbGpIGBlrjh1R"
        data-formrun-redirect="true"
      />
    </Stack>
  );
}
