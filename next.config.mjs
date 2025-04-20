/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      { hostname: "source.unsplash.com" },
      { hostname: "lh3.googleusercontent.com" },
      { hostname: "myinstagrambucket.s3.eu-central-1.amazonaws.com" },
      { hostname: 'instagram.fra1.cdn.digitaloceanspaces.com' }
    ],
  },
};

export default nextConfig;
