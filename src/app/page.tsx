"use client";
import { OriginalTheme } from "@/style/muiTheme/theme";
import Header from "@/components/header/header";
import { Divider, Stack, useMediaQuery } from "@mui/material";
import Image from "next/image";
import BusinessIntroduction from "@/components/businessIntroduction/businessIntroduction";
import { useEffect } from "react";
import { MarginY16, MarginY32, MarginY64 } from "@/style/spacing";
import BusinessLogicIntroduction from "@/components/businessLogicIntroduction/businessLogicIntroduction";
import { StyledBasicDivider } from "@/style/divider";
// import preliminaryPhoto from "@/public/preliminaryPhoto.png";

export default function Home() {
  const isPc = useMediaQuery("(min-width: 570px)");
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
    <OriginalTheme>
      <Stack alignItems="center">
        <Header isPc={isPc} />

        {/* TODO: 画像を差し替える。その際に見せ方は調整する */}
        {/* main image */}
        <Stack maxWidth="1600px">
          <Image
            src="/preliminaryPhoto.png"
            alt="preliminaryPhoto"
            width={1600}
            height={852}
            objectFit="contain"
            style={{ width: "100%", height: "auto" }}
          />
        </Stack>

        <MarginY64 />

        {/* Business */}
        <Stack maxWidth="1200px" sx={{ px: "3%", backgroundColor: "#FFFEE2" }}>
          <BusinessIntroduction isPc={isPc} />
          <MarginY64 />

          <StyledBasicDivider />
          <MarginY32 />

          <BusinessLogicIntroduction isPc={isPc} />
          <MarginY64 />
        </Stack>
      </Stack>

      {/*  フォームラン (お問い合わせフォーム) */}
      <div
        className="formrun-embed"
        data-formrun-form="@hanadaneko--hATCHzAsbGpIGBlrjh1R"
        data-formrun-redirect="true"
      />
    </OriginalTheme>
  );
}
