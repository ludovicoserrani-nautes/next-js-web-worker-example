// next.config.js
module.exports = {
  target: "serverless",
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.worker\.js$/,
      use: { loader: "worker-loader" },
    })

    return config
  }
};
