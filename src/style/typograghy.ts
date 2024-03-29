import { Typography, TypographyTypeMap, styled } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";

// Header
export const StyledHeaderItemsPcTypograghy = styled(Typography)(
  ({ theme }) => ({
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: "18px",
  })
) as OverridableComponent<TypographyTypeMap<any, "span">>;

export const StyledHeaderMenuTitleSpTypograghy = styled(Typography)(
  ({ theme }) => ({
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: "18px",
  })
) as OverridableComponent<TypographyTypeMap<any, "span">>;

// BusinessIntroduction
export const StyledBusinessIntroductionTitleTypograghy = styled(Typography)(
  ({ theme }) => ({
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: "24px",
  })
) as OverridableComponent<TypographyTypeMap<any, "h2">>;

export const StyledBusinessIntroductionCardTitleTypograghy = styled(Typography)(
  ({ theme }) => ({
    fontWeight: theme.typography.fontWeightBold,
    fontSize: "18px",
  })
) as OverridableComponent<TypographyTypeMap<any, "h2">>;

export const StyledBusinessIntroductionCardDiscriptionTypograghy = styled(
  Typography
)(({ theme }) => ({
  fontWeight: theme.typography.fontWeightRegular,
  fontSize: "13px",
})) as OverridableComponent<TypographyTypeMap<any, "p">>;

// BusinessLogicIntroduction
export const StyledBusinessLogicIntroductionTitleTypograghy = styled(
  Typography
)(({ theme }) => ({
  fontWeight: theme.typography.fontWeightBold,
  fontSize: "24px",
})) as OverridableComponent<TypographyTypeMap<any, "h2">>;

export const StyledBusinessLogicIntroductionOverViewTypograghy = styled(
  Typography
)(({ theme }) => ({
  fontWeight: theme.typography.fontWeightRegular,
  fontSize: "16px",
})) as OverridableComponent<TypographyTypeMap<any, "p">>;

export const StyledBusinessLogicIntroductionSubTitleTypograghy = styled(
  Typography
)(({ theme }) => ({
  fontWeight: theme.typography.fontWeightBold,
  fontSize: "18px",
})) as OverridableComponent<TypographyTypeMap<any, "h3">>;

export const StyledBusinessLogicIntroductionDiscriptionTypograghy = styled(
  Typography
)(({ theme }) => ({
  fontWeight: theme.typography.fontWeightRegular,
  fontSize: "13px",
})) as OverridableComponent<TypographyTypeMap<any, "p">>;

// Myself
export const StyledMyselfTitleTypograghy = styled(Typography)(({ theme }) => ({
  fontWeight: theme.typography.fontWeightBold,
  fontSize: "24px",
})) as OverridableComponent<TypographyTypeMap<any, "h2">>;

export const StyledMyselfIntroductionTypograghy = styled(Typography)(
  ({ theme }) => ({
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: "16px",
  })
) as OverridableComponent<TypographyTypeMap<any, "h3">>;

export const StyledCarrerTimeLineTypograghy = styled(Typography)(
  ({ theme }) => ({
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: "16px",
  })
) as OverridableComponent<TypographyTypeMap<any, "h3">>;

export const StyledCarrerTimeLineDiscriptionTypograghy = styled(Typography)(
  ({ theme }) => ({
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: "16px",
  })
) as OverridableComponent<TypographyTypeMap<any, "p">>;

// contact form
export const StyledContactFormTitleTypograghy = styled(Typography)(
  ({ theme }) => ({
    fontWeight: theme.typography.fontWeightBold,
    fontSize: "24px",
  })
) as OverridableComponent<TypographyTypeMap<any, "h2">>;

// Footer
export const StyledCopyRightTypograghy = styled(Typography)(({ theme }) => ({
  fontWeight: theme.typography.fontWeightRegular,
  fontSize: "14px",
})) as OverridableComponent<TypographyTypeMap<any, "span">>;
