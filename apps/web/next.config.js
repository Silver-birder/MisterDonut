const withTM = require("next-transpile-modules")(["@misterdonut/ui"]);

/** @type {import('next').NextConfig} */
const nextConfig = withTM({
  reactStrictMode: true,
  output: "standalone",
  images: {
    domains: ['img.pokemondb.net'],
  },
});

module.exports = nextConfig;