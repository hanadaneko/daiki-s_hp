import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";

async function fetchNoteRss() {
  const response = await axios.get("https://note.com/gondodaiki/rss");
  return response;
}

export async function getNoteData(req: NextApiRequest, res: NextApiResponse) {
  const response = await fetchNoteRss();
  res.setHeader("Content-Type", "application/rss+xml");
  res.setHeader("Access-Control-Allow-Origin", "*");
  if (response.status !== 200) {
    return [];
  }

  return response.data;
}
