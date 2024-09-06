/** @type {import('next').NextConfig} */
const nextConfig = {
    basePath: process.env.NODE_ENV === "production" ? "/portfolio" : "",
    assetPrefix: process.env.NODE_ENV === 'production' ? '/portfolio' : '',
    output: "export",
    reactStrictMode: true,
    images: { 
      unoptimized: true,
      path : "production" ? 'https://cska777.github.io/portfolio/' : "",
    }
  };
  
  export default nextConfig;