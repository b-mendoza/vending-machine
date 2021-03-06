/**
 * @type {import('next').NextConfig}
 */

const nextJSConfig = {
  env: {
    API_URL: 'https://vending-machine-test.vercel.app/api/products',
  },
  i18n: {
    defaultLocale: 'en-US',
    locales: ['en-US'],
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

export default nextJSConfig;
