import axios from "axios";
import { NextResponse } from "next/server";
import { parseStringPromise } from "xml2js";

export interface RssPost {
  title: string;
  link: string;
  publishedAt: string;
  thumbnail?: string;
}

export async function GET() {
  const res = await axios.get("https://note.com/gondodaiki/rss");
  const xml = res.data;
  const parsedXml = await parseStringPromise(xml);
  //   const rssPosts = parsedXml.rss.channel[0].item;

  const rssPosts = parsedXml.rss.channel[0].item
    ? parsedXml.rss.channel[0].item.map((entry: any): RssPost => {
        const mediaThumbnail = entry["media:thumbnail"]
          ? entry["media:thumbnail"][0]
          : undefined;
        const enclosureUrl = entry.enclosure
          ? entry.enclosure[0].$.url
          : undefined;
        const channelLink = parsedXml.rss.channel[0].link[0];

        return {
          title: entry.title[0],
          link: entry.link[0],
          publishedAt: new Date(entry.pubDate[0]).toISOString(),
          thumbnail: mediaThumbnail || enclosureUrl || undefined,
        };
      })
    : [];
  console.log(rssPosts);

  return new Response(JSON.stringify(rssPosts));
  //   return rssPosts;
}
