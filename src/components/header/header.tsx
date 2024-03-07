import { MarginX16, MarginY16, MarginY8 } from "@/style/spacing";
import { StyledHeaderItemsPcTypograghy } from "@/style/typograghy";
import { AppBar, Stack } from "@mui/material";
import Image from "next/image";
import HeaderSp from "@/components/header/headerSp";
import HeaderPc from "@/components/header/headerPc";

interface HeaderProps{
    isPc:boolean
}

export default function Header(isPc:HeaderProps){
    const isP = isPc.isPc
    return(
        <>
            {isP ? <HeaderPc/> : <HeaderSp/>}
        </>      
    )
}