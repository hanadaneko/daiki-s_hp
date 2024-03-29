"use client";
import { OriginalMuiTheme } from "@/style/muiTheme/theme";
import Header from "@/components/header/header";
import { Divider, Stack, useMediaQuery } from "@mui/material";
import Image from "next/image";
import BusinessIntroduction from "@/components/business/introduction/businessIntroduction";
import { useEffect } from "react";
import { MarginY16, MarginY32, MarginY64 } from "@/style/spacing";
import BusinessLogicIntroduction from "@/components/business/logicIntroduction/businessLogicIntroduction";
import { StyledBasicDivider } from "@/style/divider";
import Business from "@/components/business/business";
import Myself from "@/components/myself/myselef";
import { StyledContactFormTitleTypograghy } from "@/style/typograghy";
import Footer from "@/components/footer/footer";
// import Media from "@/components/media/media";
// import { getAllData } from "./api";
import axios from "axios";
import Media from "@/components/media/media";
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
    <OriginalMuiTheme>
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

        {/* ビジネス紹介 */}
        <Business />

        <MarginY64 />

        {/* 自己紹介 */}
        <Myself />

        <MarginY64 />

        <Media />
      </Stack>

      <MarginY64 />

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

      <MarginY32 />
      <Footer />
    </OriginalMuiTheme>
  );
}
