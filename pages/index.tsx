import HomePage from '@/components/HomePage';
import { Inter, Ubuntu } from 'next/font/google';
import { HomeSlider } from '@/components/HomeSlider';
import GetAnimes from './api/getAnimes';
import { useEffect, useState } from 'react';
import { Anime } from './api/animes';
import axios from 'axios';
import Navbar from '@/components/navbar';

const inter = Inter({ subsets: ['latin'] });
const ubuntu = Ubuntu({ subsets: ['latin'], weight: '300' });

const Home = () => {
  const [animes, setAnimes] = useState<Anime[]>([]);
  // const [search, setSearch] = useState<string>('');

  const fetchData = async () => {
    await fetch('http://localhost:3000/api/animes')
      .then((res) => res.json())
      .then((result) => setAnimes(result));
  };

  useEffect(() => {
    fetchData();
  }, []);

  // const fetchData = async () => {
  //   const { data } = await axios.get<Anime[]>('http://localhost:3000/api/animes', {
  //     params: {
  //       search,
  //     },
  //   });
  //   setAnimes(data);
  // };

  // useEffect(() => {
  //   fetchData();
  // }, [search]);

  console.log(animes);
  return (
    <main className={`${ubuntu.className}`}>
      <Navbar />

      {/* <HomeSlider /> */}
      <HomePage animes={animes} />
    </main>
  );
};

export default Home;
