import { MarginX16, MarginY16, MarginY8 } from "@/style/spacing";
import { StyledHeaderItemsPcTypograghy } from "@/style/typograghy";
import { AppBar, Stack } from "@mui/material";
import Image from "next/image";


export default function HeaderSp(){
    console.log("HeaderSp")
    return(
        <Stack direction="row" spacing={4}>
            <StyledHeaderItemsPcTypograghy>内部リンクSP</StyledHeaderItemsPcTypograghy>
            <StyledHeaderItemsPcTypograghy>内部リンク2</StyledHeaderItemsPcTypograghy>
            <StyledHeaderItemsPcTypograghy>内部リンク3</StyledHeaderItemsPcTypograghy>
            <StyledHeaderItemsPcTypograghy>内部リンク4</StyledHeaderItemsPcTypograghy>
        </Stack>
    )
}