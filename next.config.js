/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // 💡 prevents Vercel builds from breaking on ESLint errors
  },
};

module.exports = nextConfig;
