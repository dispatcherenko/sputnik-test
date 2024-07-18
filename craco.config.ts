import path from "path";

module.exports = {
  webpack: {
    module: {
      rules: [
        {
          test: /\.svg$/,
          use: ["@svgr/webpack"],
        },
      ],
    },
    alias: {
      "@widgets": path.resolve(__dirname, "src/widgets/"),
      "@shared": path.resolve(__dirname, "src/shared/"),
      "@entities": path.resolve(__dirname, "src/entities/"),
      "@features": path.resolve(__dirname, "src/features/"),
    },
  },
  typescript: {
    enableTypeChecking: true, // default value
  },
};
