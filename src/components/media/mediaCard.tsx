import { StyledMediaCard, StyledMediaCardContent } from "@/style/card";
import {
  StyledMediaCardTitleTypograghy,
  StyledMediaDateTypograghy,
  StyledMediaTitleTypograghy,
} from "@/style/typograghy";
import { Grid, Link, Stack } from "@mui/material";
import image from "next/image";

interface MediaCardProps {
  title: string;
  link: string;
  publishedAt: string;
  thumbnail: string | undefined;
}

export default function MediaCard({
  title,
  link,
  publishedAt,
  thumbnail,
}: MediaCardProps) {
  const date = new Date(publishedAt);
  return (
    <StyledMediaCard variant="outlined">
      <Link href={link} target="_blank" underline="hover">
        <Grid container spacing={1}>
          <Grid item xs={12} sm={6} md={5}>
            <StyledMediaCardContent>
              <img
                src={thumbnail ? thumbnail : "/noteNoImage.png"}
                alt={title}
                style={{ width: "100%", height: "auto" }}
              />
            </StyledMediaCardContent>
          </Grid>
          <Grid item xs={12} sm={6} md={7}>
            <StyledMediaCardContent>
              <StyledMediaCardTitleTypograghy>
                {title}
              </StyledMediaCardTitleTypograghy>
              <StyledMediaDateTypograghy>
                {date.toLocaleDateString()}
              </StyledMediaDateTypograghy>
            </StyledMediaCardContent>
          </Grid>
        </Grid>
      </Link>
    </StyledMediaCard>
  );
}
