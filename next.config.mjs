/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // images: {
  //   domains: ['cdn.dummyjson.com', 'cdn.myanimelist.net'],
  // },

  images: {
    remotePatterns: [
      {
        hostname: 'cdn.myanimelist.net',
      },
      {
        hostname: 'cdn.dummyjson.com',
      },
    ],
  },
};

export default nextConfig;
