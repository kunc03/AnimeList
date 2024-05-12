import Navbar from '@/components/navbar';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { createContext } from 'react';
// import { Product } from '@/types';

// export const productContext = createContext();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
    </>
  );
}
