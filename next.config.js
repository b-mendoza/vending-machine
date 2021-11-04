/**
 * @type {import('next').NextConfig}
 */

module.exports = {
  env: {
    API_URL: 'https://vending-machine-test.vercel.app/api/products',
  },
  images: {
    domains: [
      'assets.epicurious.com',
      'images-na.ssl-images-amazon.com',
      'images.ctfassets.net',
      'images.heb.com',
      'products3.imgix.drizly.com',
      'randys-pizza.com',
      'sc04.alicdn.com',
      'upload.wikimedia.org',
      'veohops.com',
      'www.cobsbread.com',
    ],
  },
  reactStrictMode: true,
};
