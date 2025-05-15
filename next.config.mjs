/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['localhost'],
  },
  // This is important for TensorFlow.js to work properly
  webpack: (config) => {
    // This is needed for the TensorFlow.js library
    config.resolve.fallback = {
      fs: false,
      path: false,
      crypto: false
    };
    return config;
  },
};

export default nextConfig;
