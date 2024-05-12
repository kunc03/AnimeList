import { Animes } from '@/types';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { CgPlayButton } from 'react-icons/cg';
import { FaStar } from 'react-icons/fa6';

const Recommendation = () => {
  const [recommend, setRecommend] = useState<Animes[]>([]);
  //https:api.jikan.moe/v4/recommendations/anime
  const fetchData = async () => {
    await fetch('https://api.jikan.moe/v4/seasons/now')
      .then((res) => res.json())
      .then((result) => setRecommend(result.data));
  };

  useEffect(() => {
    fetchData();
  }, []);

  //   console.log(recommend);

  return (
    <>
      <h1 className="text-2xl ">Recommendation</h1>
      <div className="flex flex-col gap-5">
        <div className="flex flex-col justify-center gap-5 bg-slate-300 rounded-sm">
          {recommend.slice(0, 5).map((anime: any, index: number) => (
            <Link key={index} href={`/anime/${anime.title}`} className="text-sky-900 hover:text-sky-50 hover:bg-sky-800 rounded-md text-sm h-[370px]">
              <Image src={anime.images.webp.large_image_url} width={200} height={200} alt={anime.title} className="rounded-sm w-full h-[310px]" />
              <div className="hidden group-hover:duration-500 group-hover:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-black/60 text-white z-10 rounded-sm transition-all duration-300">
                <CgPlayButton size={100} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
              </div>
              <div className="absolute flex items-center justify-between bottom-0 px-2 text-sky-50 w-full">
                <h4 className="bg-sky-800 px-1 text-sm font-semibold rounded mb-1 flex items-center gap-1">
                  <FaStar size={15} /> {anime.score}
                </h4>
                <p className="bg-sky-50 px-1 text-sky-800 text-sm font-semibold rounded mb-1">EP {anime.episodes}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Recommendation;
