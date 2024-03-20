import { Grid, Stack } from "@mui/material";
import { BUSINESS_LOGIC_INTRODUCTION } from "@/const/business";
import Image from "next/image";
import { relative } from "path";
import {
  StyledBusinessLogicIntroductionDiscriptionTypograghy,
  StyledBusinessLogicIntroductionOverViewTypograghy,
  StyledBusinessLogicIntroductionSubTitleTypograghy,
  StyledBusinessLogicIntroductionTitleTypograghy,
} from "@/style/typograghy";
import { MarginY16, MarginY32 } from "@/style/spacing";

interface BusinessLogicIntroductionProps {
  isPc: boolean;
}

export default function BusinessLogicIntroduction(
  isPc: BusinessLogicIntroductionProps
) {
  return (
    <Grid container spacing={2} alignItems="center" sx={{ px: "10px" }}>
      <Grid item xs={12} sm={5}>
        <img
          src={BUSINESS_LOGIC_INTRODUCTION.img}
          alt="preliminaryPhoto"
          object-fit="contain"
          style={{ width: "100%", height: "auto" }}
        />
      </Grid>

      <MarginY16 />

      <Grid item xs={12} sm={7}>
        <StyledBusinessLogicIntroductionTitleTypograghy>
          {BUSINESS_LOGIC_INTRODUCTION.title}
        </StyledBusinessLogicIntroductionTitleTypograghy>

        <MarginY16 />

        <StyledBusinessLogicIntroductionOverViewTypograghy>
          {BUSINESS_LOGIC_INTRODUCTION.overView}
        </StyledBusinessLogicIntroductionOverViewTypograghy>

        <MarginY32 />

        <StyledBusinessLogicIntroductionSubTitleTypograghy>
          {BUSINESS_LOGIC_INTRODUCTION.subTitle}
        </StyledBusinessLogicIntroductionSubTitleTypograghy>

        <MarginY16 />

        <StyledBusinessLogicIntroductionDiscriptionTypograghy>
          {BUSINESS_LOGIC_INTRODUCTION.description}
        </StyledBusinessLogicIntroductionDiscriptionTypograghy>
      </Grid>
    </Grid>
  );
}
