// "use client";
import { NoteDataGet, RssPost } from "@/libs/note/note";
import { StyledMediaCard } from "@/style/card";
import { Grid, Stack } from "@mui/material";
import axios from "axios";
import { GetStaticProps } from "next";
import { use, useEffect, useState } from "react";
import useSWR, { Fetcher } from "swr";
import { parseStringPromise } from "xml2js";
import MediaCard from "@/components/media/mediaCard";
import { StyledMediaTitleTypograghy } from "@/style/typograghy";
import { MarginY16, MarginY24, MarginY32 } from "@/style/spacing";
import { BACKUP_NOTE_DATA } from "@/const/backupNoteData";

export default function Media() {
  const [data, setData] = useState<RssPost[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      await fetch("/api")
        .then((res) => res.json())
        .then((data) => {
          console.log("dataだよ " + JSON.stringify(data));
          setData(data);
          //   return viewData;
        });
    };
    fetchData();
  }, []);

  //   dataのうち最初の3つを取得
  const posts = data.slice(0, 4);

  return (
    <Stack alignItems="center" sx={{ mx: "20px" }}>
      <StyledMediaTitleTypograghy>Blog</StyledMediaTitleTypograghy>
      <MarginY32 />
      <Grid container spacing={2}>
        {posts.map((post: RssPost) => (
          <Grid item xs={12} sm={6} key={post.title}>
            <MediaCard
              title={post.title}
              link={post.link}
              publishedAt={post.publishedAt}
              thumbnail={post.thumbnail}
            />
          </Grid>
        ))}
        {posts.length === 0 &&
          BACKUP_NOTE_DATA.map((data) => (
            <Grid item xs={12} sm={6} key={data.title}>
              <MediaCard
                title={data.title}
                link={data.link}
                publishedAt={data.publishedAt}
                thumbnail={data.thumbnail}
              />
            </Grid>
          ))}
      </Grid>
    </Stack>
  );
}
