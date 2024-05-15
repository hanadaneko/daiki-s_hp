import {
  StyledBusinessIntroductionCard,
  StyledBusinessIntroductionCardContent,
} from "@/style/card";
import { MarginY8 } from "@/style/spacing";
import {
  StyledBusinessIntroductionCardDiscriptionTypograghy,
  StyledBusinessIntroductionCardTitleTypograghy,
} from "@/style/typograghy";
import { Card, CardContent, CardMedia } from "@mui/material";
import Image from "next/image";

interface BusinessIntroductionCardProps {
  image: string;
  title: string;
  description: string;
}

export default function BusinessIntroductionCard({
  image,
  title,
  description,
}: BusinessIntroductionCardProps) {
  return (
    <StyledBusinessIntroductionCard>
      {/* public\preliminaryPhoto.pngを表示 */}
      <Image
        src={image}
        alt="preliminaryPhoto"
        width={1280}
        height={852}
        style={{ width: "100%", height: "250px" }}
      />
      {/* <CardMedia image="../preliminaryPhoto.png" title="preliminaryPhoto" /> */}
      <StyledBusinessIntroductionCardContent>
        <StyledBusinessIntroductionCardTitleTypograghy>
          {title}
        </StyledBusinessIntroductionCardTitleTypograghy>

        <MarginY8 />

        <StyledBusinessIntroductionCardDiscriptionTypograghy>
          {description}
        </StyledBusinessIntroductionCardDiscriptionTypograghy>
      </StyledBusinessIntroductionCardContent>
    </StyledBusinessIntroductionCard>
  );
}
