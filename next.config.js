/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "standalone",
  images: {
    domains: ['img.pokemondb.net'],
  },
};

module.exports = nextConfig;
