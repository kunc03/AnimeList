import React, { useEffect, useState } from 'react';
import { CgPlayButton } from 'react-icons/cg';
import Recommendation from './Recommendation';
import { FaStar } from 'react-icons/fa6';
import Image from 'next/image';
import { HomeSlider } from './HomeSlider';
import Link from 'next/link';

const HomePage = ({ animes }: any) => {
  const [genresBtn, setGenresBtn] = useState(false);

  // const slides = [
  //   {
  //     url: 'https://img.youtube.com/vi/ZEkwCGJ3o7M/maxresdefault.jpg',
  //   },
  //   {
  //     url: 'https://img.youtube.com/vi/--IcmZkvL0Q/maxresdefault.jpg',
  //   },
  //   {
  //     url: 'https://img.youtube.com/vi/e8YBesRKq_U/maxresdefault.jpg',
  //   },
  //   {
  //     url: 'https://img.youtube.com/vi/Zn1filVUyf8/maxresdefault.jpg',
  //   },
  //   {
  //     url: 'https://img.youtube.com/vi/Ip8Btv2t_6c/maxresdefault.jpg',
  //   },
  // ];

  // const [currentIndex, setCurrentIndex] = useState(0);

  // const prevSlide = () => {
  //   const isFirstSlide = currentIndex === 0;
  //   const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;

  //   setCurrentIndex(newIndex);
  // };

  // const nextSlide = () => {
  //   const isLastSlide = currentIndex === slides.length - 1;
  //   const newIndex = isLastSlide ? 0 : currentIndex + 1;
  //   setCurrentIndex(newIndex);
  // };

  const [genres, setGenres] = useState<string[]>([]);

  const fetchGenres = async () => {
    await fetch('https://api.jikan.moe/v4/genres/anime')
      .then((res) => res.json())
      .then((result) => {
        setGenres(result.data);
      });
  };

  useEffect(() => {
    fetchGenres();
  }, []);

  const handleClick = () => {
    // console.log(genresBtn);
    setGenresBtn(!genresBtn);
  };

  return (
    <div className="flex flex-col gap-2">
      {/* intro background */}
      <div className="h-[500px] w-full">
        <HomeSlider />
      </div>

      {/* update Animes */}
      <div className="p-5 flex gap-5">
        <div className="w-3/4">
          <h1 className="text-2xl mb-5">Update Terbaru</h1>
          <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-5">
            {animes.map((anime: any, index: number) => (
              <div key={index} className="bg-slate-100">
                <Link href={`/anime/${anime.title}`} className="relative group">
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
                <div className="p-2 text-sm">
                  <h1 className="font-semibold mb-2">{anime.title}</h1>
                  <p className=" text-slate-500">
                    Sub Indo {anime.season} {anime.year}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="w-1/4 flex flex-col gap-5">
          {/* Recommendations */}
          <Recommendation />

          {/* Genres */}
          <h1 className="text-2xl mb-5">Genre</h1>
          <div className="flex flex-col gap-5">
            <div className="grid grid-cols-3 justify-center gap-1 bg-slate-300 p-3">
              {genresBtn === false
                ? genres.slice(0, 24).map((genre: any, index: number) => (
                    <Link key={index} href={`/genre/${genre.name}`} className="text-sky-900 hover:text-sky-50 p-2 hover:bg-sky-800 truncate rounded-md text-sm font-semibold">
                      {genre.name}
                    </Link>
                  ))
                : genres.map((genre: any, index: number) => (
                    <Link key={index} href={`/genre/${genre.name}`} className="text-sky-900 hover:text-sky-50 p-2 hover:bg-sky-800 truncate rounded-md text-sm font-semibold">
                      {genre.name}
                    </Link>
                  ))}
            </div>
            <button className="text-sky-50 bg-sky-800 hover:bg-slate-500 truncate rounded-sm text-sm font-semibold w-full p-4" onClick={handleClick}>
              Show More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
