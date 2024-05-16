import { createVanillaExtractPlugin } from '@vanilla-extract/next-plugin';
import withPWA from 'next-pwa';
import withPlugins from 'next-compose-plugins';

const withVanillaExtract = createVanillaExtractPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    return config;
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*',
      },
    ],
  },
};

export default withPlugins(
  [
    [withPWA, {pwa:{dest:'public'}}]
  ],
  withVanillaExtract(nextConfig)
)