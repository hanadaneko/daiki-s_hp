import { StyledHeaderAppBar } from "@/style/appbar";
import { StyledHeaderItemsPcButton } from "@/style/button";
import { MarginX16, MarginY16, MarginY8 } from "@/style/spacing";
import { StyledHeaderItemsPcTypograghy } from "@/style/typograghy";
import { AppBar, Stack } from "@mui/material";
import Image from "next/image";

interface HeaderPcProps{
    headerItems:string[]
}


export default function HeaderPc(headerItems:HeaderPcProps){
    console.log("HeaderPc")

    return(
        <Stack direction="row" spacing={1}>
            {headerItems.headerItems.map((item, index) => {
                return(
                    <StyledHeaderItemsPcButton key={index}>
                        <StyledHeaderItemsPcTypograghy key={index}>{item}</StyledHeaderItemsPcTypograghy>
                    </StyledHeaderItemsPcButton>
                )
            })}
        </Stack>
    )
}