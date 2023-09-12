/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  env: {
    CONTENTFUL_SPACE_ID: "kfhc9jkq7tom",
    CONTENTFUL_ACCESS_KEY: "Fl-H2H-gSkhcPDJ61V_SPg-NM0IEAFlJwzgxoiK8NPM",
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.ctfassets.net",
        port: "",
      },
    ],
  }
};

module.exports = nextConfig;
