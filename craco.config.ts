import path from "path";

module.exports = {
  webpack: {
    alias: {
      "@widgets": path.resolve(__dirname, "src/widgets/"),
      "@shared": path.resolve(__dirname, "src/shared/"),
      "@entities": path.resolve(__dirname, "src/entities/"),
    },
  },
  typescript: {
    enableTypeChecking: true /* (default value) */,
  },
};
