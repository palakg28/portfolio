// next.config.mjs (or next.config.js if you're already using ESM)
const isProd = process.env.NODE_ENV === "production";

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Produce a static site in /out
  output: "export",

  // next/image must be unoptimized for static export
  images: {
    unoptimized: true,
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
    ],
  },

  // If the repo name is "portfolio", your site will live at /portfolio
  // This makes all asset and link paths work there.
  ...(isProd
    ? {
        basePath: "/portfolio",
        assetPrefix: "/portfolio/",
      }
    : {}),
};

export default nextConfig;
