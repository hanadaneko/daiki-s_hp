'use client'
import { OriginalTheme } from "@/style/theme";
import Header from "@/components/header/header";
import { Stack, useMediaQuery } from "@mui/material";
import Image from "next/image";
import BusinessIntroduction from "@/components/businessIntroduction/businessIntroduction";
// import preliminaryPhoto from "@/public/preliminaryPhoto.png";

export default function Home(){
  const isPc = useMediaQuery("(min-width: 600px)")
  return(
    <OriginalTheme>
      <Stack>
        <Header isPc={isPc}/>
          {/* TODO: 画像を差し替える。その際に見せ方は調整する */}
        <Image
        src="/preliminaryPhoto.png" 
        alt="preliminaryPhoto" 
        width={1280} height={852} objectFit="contain" 
        style={{ width: '100%', height: 'auto' }} 
        />

        <BusinessIntroduction/>
      </Stack>
    </OriginalTheme>
  )
}