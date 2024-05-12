import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import { ImagesSlider } from './ui/images-slider';
import { Animes } from '@/types';
import axios from 'axios';

export function HomeSlider() {
  const images = [
    'https://img.youtube.com/vi/ZEkwCGJ3o7M/maxresdefault.jpg',
    'https://img.youtube.com/vi/--IcmZkvL0Q/maxresdefault.jpg',
    'https://img.youtube.com/vi/e8YBesRKq_U/maxresdefault.jpg',
    'https://img.youtube.com/vi/Zn1filVUyf8/maxresdefault.jpg',
    'https://img.youtube.com/vi/Ip8Btv2t_6c/maxresdefault.jpg',
  ];

  return (
    <ImagesSlider className="" images={images}>
      <motion.div
        initial={{
          opacity: 0,
          y: -80,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.6,
        }}
        className="z-50 flex flex-col justify-center items-center"
      ></motion.div>
    </ImagesSlider>
  );
}
