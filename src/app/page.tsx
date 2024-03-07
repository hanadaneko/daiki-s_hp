'use client'
import { OriginalTheme } from "@/style/theme";
import Header from "../components/header/header";
import { Stack, useMediaQuery } from "@mui/material";

export default function Home(){
  const isPc = useMediaQuery("(min-width: 600px)")
  return(
    <OriginalTheme>
      <Stack>
        <Header isPc={isPc}/>
      </Stack>
    </OriginalTheme>
  )
}