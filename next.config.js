module.exports = {
  // reactStrictMode: true,
  webpack: (config, { isServer }) => {
    config.module.rules.push({
      test: /\.xml$/,
      use: "raw-loader",
    });

    return config;
  },
  images: {
    domains: ["res.cloudinary.com"],
  },
};
