/** @type {import('next').NextConfig} */
const nextConfig = {
    basePath: process.env.NODE_ENV === "production" ? "/portfolio" : "",
    assetPrefix: process.env.NODE_ENV === 'production' ? '/portfolio' : '',
    reactStrictMode: true,
  };
  
  export default nextConfig;