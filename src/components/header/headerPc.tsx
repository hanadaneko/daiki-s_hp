import { StyledHeaderAppBar } from "@/style/appbar";
import { MarginX16, MarginY16, MarginY8 } from "@/style/spacing";
import { StyledHeaderItemsPcTypograghy } from "@/style/typograghy";
import { AppBar, Stack } from "@mui/material";
import Image from "next/image";


export default function HeaderPc(){
    console.log("HeaderPc")
    return(
        <>
            <StyledHeaderAppBar position="static" >
                <MarginY16/>
                <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{pr:"16px"}} >
                    <Image src={"/sample-logo.png"} alt={"sample-logo"} width={200} height={60}/>
                    <Stack direction="row" spacing={4}>
                        <StyledHeaderItemsPcTypograghy>内部リンク1</StyledHeaderItemsPcTypograghy>
                        <StyledHeaderItemsPcTypograghy>内部リンク2</StyledHeaderItemsPcTypograghy>
                        <StyledHeaderItemsPcTypograghy>内部リンク3</StyledHeaderItemsPcTypograghy>
                        <StyledHeaderItemsPcTypograghy>内部リンク4</StyledHeaderItemsPcTypograghy>
                    </Stack>
                    {/* <MarginX16/> */}
                </Stack>
                <MarginY16/>
            </StyledHeaderAppBar>
        </>
    )
}