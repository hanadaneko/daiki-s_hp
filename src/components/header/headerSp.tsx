import { StyledHeaderItemsPcButton } from "@/style/button";
import { StyledBasicDivider, StyledHeaderMenuDivider } from "@/style/divider";
import {
  MarginX16,
  MarginY16,
  MarginY24,
  MarginY32,
  MarginY8,
} from "@/style/spacing";
import {
  StyledHeaderItemsPcTypograghy,
  StyledHeaderMenuTitleSpTypograghy,
} from "@/style/typograghy";
import { Drawer, Stack } from "@mui/material";
import Image from "next/image";
import { useState } from "react";
import { Link as Scroll } from "react-scroll";
// import menuIcon from "@/public/align-justify.svg";

interface HeaderSpProps {
  headerItems: string[];
}
export default function HeaderSp(headerItems: HeaderSpProps) {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    // align-justify.svgを用いて、ハンバーガーメニューを実装する。メニューの中身は、headerItemsを用いる。
    <Stack>
      <StyledHeaderItemsPcButton
        onClick={handleClick}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
      >
        <Image
          src={"/align-justify.svg"}
          alt={"align-justify"}
          width={30}
          height={30}
        />
      </StyledHeaderItemsPcButton>
      <Drawer anchor="right" open={open} onClose={handleClose}>
        <MarginY32 />
        <Stack textAlign="center">
          <StyledHeaderMenuTitleSpTypograghy>
            Menu
          </StyledHeaderMenuTitleSpTypograghy>
        </Stack>
        <MarginY24 />

        {headerItems.headerItems.map((item, index) => {
          return (
            <Stack sx={{ px: "30px" }} key={index}>
              <Scroll to={item} smooth={true} duration={300}>
                <StyledHeaderItemsPcTypograghy
                  key={index}
                  onClick={handleClose}
                >
                  {item}
                </StyledHeaderItemsPcTypograghy>
              </Scroll>
              <StyledHeaderMenuDivider />
            </Stack>
          );
        })}
      </Drawer>
    </Stack>
  );
}
