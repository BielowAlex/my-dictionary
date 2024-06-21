/** @type {import('next').NextConfig} */
const nextConfig = {
   images: {
       remotePatterns: [{hostname: "upload.wikimedia.org"},{hostname: "wallpapers.com"}]
   },

};


export default nextConfig;
