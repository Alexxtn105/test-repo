/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    reactStrictMode: true,
    swcMinify: true,
    trailingSlash: true, // добавить для nginx

    images: {
        domains: ['images.unsplash.com'],
        unoptimized: true,// Обязательно для статики
     },


}

module.exports = nextConfig