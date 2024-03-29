import { MarginY32 } from "@/style/spacing";
import { StyledMyselfStack } from "@/style/stack";
import { Divider, Grid, Stack } from "@mui/material";
import { CAREER } from "@/const/myself";
import { StyledBasicDivider, StyledverticalDivider } from "@/style/divider";
import {
  StyledCarrerTimeLineDiscriptionTypograghy,
  StyledCarrerTimeLineTypograghy,
} from "@/style/typograghy";

export default function Carrer() {
  return (
    <Stack maxWidth="1200px">
      <MarginY32 />
      <StyledBasicDivider>carrer</StyledBasicDivider>
      <Stack sx={{ marginX: "5%" }}>
        {CAREER.map((career, index) => (
          <Stack key={index} direction="row" alignItems="center">
            <Grid item xs={2.5} sm={3.5} md={1.5}>
              <StyledCarrerTimeLineTypograghy>
                {career.year}/{career.month}
              </StyledCarrerTimeLineTypograghy>
            </Grid>
            <StyledverticalDivider orientation="vertical" flexItem />
            <Grid item xs={9.5} sm={8.5} md={10.5}>
              <Stack marginLeft="20px">
                <StyledCarrerTimeLineDiscriptionTypograghy>
                  {career.description}
                </StyledCarrerTimeLineDiscriptionTypograghy>
              </Stack>
            </Grid>
          </Stack>
        ))}
      </Stack>
      <MarginY32 />
    </Stack>
  );
}
