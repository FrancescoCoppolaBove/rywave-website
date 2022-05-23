/** @type {import('next').NextConfig} */
const withFonts = require("next-fonts");

const nextConfig = {
  reactStrictMode: true,
};

module.exports = nextConfig;
module.exports = withFonts({
  webpack(config, options) {
    config.node = {
      fs: "empty",
    };
    config.module.rules.push({
      test: /\.(png|woff|woff2|eot|ttf|svg)$/,
      use: [
        options.defaultLoaders.babel,
        {
          loader: "url-loader?limit=100000",
        },
        {
          loader: "file-loader",
        },
      ],
    });
    return config;
  },
});

module.exports = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
};
