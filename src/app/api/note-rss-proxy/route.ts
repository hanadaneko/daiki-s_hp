import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    // noteのRSSフィードのURL
    const NoteRSSDomain = "https://note.com/gondodaiki/rss";
    const noteRssUrl = `${NoteRSSDomain}`;
    // axios.get()を使って非同期的にnoteRssUrlからRSSフィードを取得し、そのレスポンスをresponseに格納
    const response = await axios.get(noteRssUrl, { responseType: "text" });

    res.setHeader("Content-Type", "application/rss+xml");
    // CORSヘッダーを設定
    res.setHeader("Access-Control-Allow-Origin", "*");

    res.status(200).send(response.data);
  } catch (error) {
    res.status(500).json({ error: "Error fetching note RSS feed" });
  }
}
