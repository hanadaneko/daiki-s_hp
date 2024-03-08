import { MarginX16, MarginY16, MarginY8 } from "@/style/spacing";
import { StyledHeaderItemsPcTypograghy } from "@/style/typograghy";
import { AppBar, Stack } from "@mui/material";
import Image from "next/image";
import HeaderSp from "@/components/header/headerSp";
import HeaderPc from "@/components/header/headerPc";
import { StyledHeaderAppBar } from "@/style/appbar";
import { StyledHeaderItemsPcButton } from "@/style/button";

interface HeaderProps{
    isPc:boolean
}
const HeaderItems = [
    "内部リンク1",
    "内部リンク2",
    "内部リンク3",
    "内部リンク4"
]

export default function Header(isPc:HeaderProps){
    const isP = isPc.isPc
    return(
        <StyledHeaderAppBar position="static" >
        <MarginY16/>
        <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{px:"24px"}} >
            <Image src={"/sample-logo.png"} alt={"sample-logo"} width={200} height={60}/>
            {isP ? <HeaderPc headerItems={HeaderItems}/> : <HeaderSp/>}
        </Stack>
        <MarginY16/>
        </StyledHeaderAppBar> 
    )
}

