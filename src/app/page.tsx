"use client";
import { OriginalTheme } from "@/style/theme";
import Header from "@/components/header/header";
import { Stack, useMediaQuery } from "@mui/material";
import Image from "next/image";
import BusinessIntroduction from "@/components/businessIntroduction/businessIntroduction";
import { useEffect } from "react";
// import preliminaryPhoto from "@/public/preliminaryPhoto.png";

export default function Home() {
  const isPc = useMediaQuery("(min-width: 600px)");
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://form.run/js/v2/embed.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  });
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
        <BusinessIntroduction />

        <div
          className="formrun-embed"
          data-formrun-form="@hanadaneko--hATCHzAsbGpIGBlrjh1R"
          data-formrun-redirect="true"
        ></div>
      </Stack>
    </OriginalTheme>
  );
}
