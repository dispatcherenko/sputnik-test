import type { JestConfigWithTsJest } from "ts-jest";

const config: JestConfigWithTsJest = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["./setup-jest.ts"],
  transform: {
    "^.+\\.(ts|tsx)?$": "babel-jest",
  },
  transformIgnorePatterns: [
    "/node_modules/(?!(axios)/)", // добавьте любые другие модули, которые также нуждаются в трансформации
  ],
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  moduleNameMapper: {
    "^@shared/(.*)$": "<rootDir>/src/shared/$1",
    "^@features/(.*)$": "<rootDir>/src/features/$1",
  },
};

export default config;
