/** @type {import('next').NextConfig} */
const nextConfig = {
   images: {
       remotePatterns: [{hostname: "upload.wikimedia.org"},{hostname: "wallpapers.com"}, {hostname:"lh3.googleusercontent.com"}]

   },

};


export default nextConfig;
