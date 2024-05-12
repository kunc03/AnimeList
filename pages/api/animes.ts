// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { animes } from './data';
import { Animes } from '@/types';

export type Anime = {
  title: string;
};

export default function handler(req: NextApiRequest, res: NextApiResponse<Anime[]>) {
  if (req.method !== 'GET') return res.status(404);
  const searchQuery: string = (req.query.search as string) || '';

  const filteredAnimes = animes.filter((anime) => anime.title.toLowerCase().includes(searchQuery.toLowerCase()));

  return res.json(filteredAnimes);
}
