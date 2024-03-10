"use client";
import { OriginalTheme } from "@/style/theme";
import Header from "@/components/header/header";
import { Stack, useMediaQuery } from "@mui/material";
import Image from "next/image";
import BusinessIntroduction from "@/components/businessIntroduction/businessIntroduction";
import { useEffect } from "react";
import { MarginY16, MarginY32 } from "@/style/spacing";
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
        <Stack maxWidth="1200px">
          <Image
            src="/preliminaryPhoto.png"
            alt="preliminaryPhoto"
            width={1280}
            height={852}
            objectFit="contain"
            style={{ width: "100%", height: "auto" }}
          />
        </Stack>
        <MarginY32 />
        <BusinessIntroduction isPc={isPc} />
      </Stack>
      <div
        className="formrun-embed"
        data-formrun-form="@hanadaneko--hATCHzAsbGpIGBlrjh1R"
        data-formrun-redirect="true"
      />
    </OriginalTheme>
  );
}
