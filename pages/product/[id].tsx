import { useRouter } from 'next/router';
import { useState, useEffect, useContext } from 'react';
import { Product } from '@/types';
import Image from 'next/image';
import { BiSolidHeart } from 'react-icons/bi';

const ProductPage = () => {
  const [animes, setAnimes] = useState<any>([]);
  const router = useRouter();
  const id = router.query.id;

  const fetchData = async () => {
    await fetch(`https://api.jikan.moe/v4/anime/${id}`)
      .then((res) => res.json())
      .then((result) => console.log(result.data));
  };

  useEffect(() => {
    fetchData();
  }, []);

  // console.log(animes);

  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="bg-cyan-600 w-[15rem] p-5 rounded-md flex flex-col gap-4">
        <h1 className="text-xl text-cyan-50 font-semibold text-center">{animes.title}</h1>
        <Image src={animes.images.jpg.large_image_url} alt={animes.title} width={200} height={200} className="rounded-sm" />
        <div className="flex justify-between items-center">
          {/* <h1 className="text-sm text-cyan-200">${animes.price}</h1> */}
          <button className="">
            <BiSolidHeart size={23} className="text-cyan-400 hover:scale-105 duration-200" />
          </button>
        </div>
        <h1 className="text-sm mt-1 text-justify">{animes.synopsis}</h1>
      </div>
    </div>
  );
};

export default ProductPage;
