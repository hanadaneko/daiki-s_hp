import { StyledBusinessIntroductionTitleTypograghy } from "@/style/typograghy";
import { Grid, Stack } from "@mui/material";
import BusinessIntroductionCard from "@/components/businessIntroduction/businessIntroductionCard";
import { BUSINESS_INTRODUCTION } from "@/const/business";
import { MarginX16, MarginY32 } from "@/style/spacing";

interface BusinessIntroductionProps {
  isPc: boolean;
}

export default function BusinessIntroduction(isPc: BusinessIntroductionProps) {
  return (
    <Stack>
      <MarginY32 />
      <Stack alignItems="center">
        <StyledBusinessIntroductionTitleTypograghy>
          ビジネス紹介
        </StyledBusinessIntroductionTitleTypograghy>
      </Stack>
      <MarginY32 />
      <Grid container spacing={2}>
        {BUSINESS_INTRODUCTION.map((business) => (
          <Grid item xs={12} sm={6} md={4} key={business.title}>
            <BusinessIntroductionCard
              image={business.image}
              title={business.title}
              description={business.description}
            />
          </Grid>
        ))}
      </Grid>
    </Stack>
  );
}
