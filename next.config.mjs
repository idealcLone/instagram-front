/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      { hostname: "source.unsplash.com" },
      { hostname: "lh3.googleusercontent.com" },
      { hostname: "myinstagrambucket.s3.eu-central-1.amazonaws.com" },
    ],
  },
};

export default nextConfig;
