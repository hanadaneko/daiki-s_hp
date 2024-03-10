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
    <Card>
      {/* public\preliminaryPhoto.pngを表示 */}
      <Image
        src={image}
        alt="preliminaryPhoto"
        width={1280}
        height={852}
        style={{ width: "100%", height: "auto" }}
      />
      {/* <CardMedia image="../preliminaryPhoto.png" title="preliminaryPhoto" /> */}
      <CardContent>
        <h2>{title}</h2>
        <p>{description}</p>
      </CardContent>
    </Card>
  );
}
