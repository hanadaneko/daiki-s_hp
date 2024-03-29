import { Stack } from "@mui/material";
import axios from "axios";
import useSWR, { Fetcher } from "swr";

const sampleData = [
  {
    title: ["正しいシャンプーの選び方"],
    description: [
      `<p name="eb8a7c0e-8b06-4cfc-ad54-5b8dcedb36b7" id="eb8a7c0e-8b06-4cfc-ad54-5b8dcedb36b7">おはようございます。<br>権藤大樹です。<br>大阪で飲食店経営をやったり、シャンプー専門の小売店をやったり、ヘッドスパのお店をやったりしています。</p><p name="bd9bd679-19ce-4105-a241-8542d8681fd9" id="bd9bd679-19ce-4105-a241-8542d8681fd9">本日は、シャンプー専門店をやっている僕が、思う正しいシャンプーの選び方についてのポイントを述べていきたいと思っています。</p><br/><a href='https://note.com/gondodaiki/n/ne21299da3874'>続きをみる</a>`,
    ],
    "note:creatorImage": [
      "https://assets.st-note.com/production/uploads/images/40553099/profile_dad2842cd6322211da4e0d6a7bce75e3.jpg?fit=bounds&format=jpeg&quality=85&width=330",
    ],
    "note:creatorName": ["権藤大樹｜Link代表"],
    pubDate: ["Thu, 25 Jan 2024 14:18:17 +0900"],
    link: ["https://note.com/gondodaiki/n/ne21299da3874"],
    guid: ["https://note.com/gondodaiki/n/ne21299da3874"],
  },
];

interface Post {
  title: string[];
  description: string[];
  "note:creatorImage": string[];
  "note:creatorName": string[];
  pubDate: string[];
  link: string[];
  guid: string[];
}

export default function Media() {
  const fetcher = (url: string) => axios.get(url).then((res) => res.data);
  const { data, error, isLoading } = useSWR("/api", fetcher);
  console.log(data);

  const rssPosts = data?.rss.channel[0].item;
  console.log("test" + rssPosts);

  return (
    <Stack>
      {/* <button onClick={onClick}>Get Data</button> */}
      {/* 多重配列をMAPして title、media,descriptionを取り出して表示*/}
      {/* {dataView} */}
    </Stack>
  );
}
