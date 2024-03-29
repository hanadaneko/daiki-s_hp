import { BUSINESS_LOGIC_INTRODUCTION } from "@/const/business";
import { MarginY32 } from "@/style/spacing";
import { StyledMyselfStack } from "@/style/stack";
import { StyledMyselfTitleTypograghy } from "@/style/typograghy";
import { Grid, Stack } from "@mui/material";
import { SELF_INTRODUCTION } from "@/const/myself";
import SelfIntroduction from "@/components/myself/selfIntroduction/selfIntroduction";
import { StyledBasicDivider } from "@/style/divider";
import Carrer from "@/components/myself/carrer/carrer";

export default function Myself() {
  return (
    <StyledMyselfStack maxWidth="1200px">
      <MarginY32 />
      <Stack alignItems="center">
        <StyledMyselfTitleTypograghy id="about">
          About
        </StyledMyselfTitleTypograghy>
      </Stack>
      <MarginY32 />
      <Grid container spacing={4} sx={{ px: "10px" }}>
        <Grid item xs={12} sm={5} md={4}>
          <img
            src={SELF_INTRODUCTION.img}
            alt="preliminaryPhoto"
            object-fit="contain"
            style={{ width: "100%", height: "auto" }}
          />
        </Grid>
        <Grid item xs={12} sm={7} md={8}>
          <SelfIntroduction message={SELF_INTRODUCTION.message} />
          <Carrer />
        </Grid>
      </Grid>
    </StyledMyselfStack>
  );
}
