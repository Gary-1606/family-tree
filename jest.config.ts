import { Config } from "@jest/types";

const config: Config.InitialOptions = {
  collectCoverageFrom: [
    "**/*.{js,jsx,ts,tsx}",
    "!**/*.d.ts",
    "!**/node_modules/**",
  ],
  moduleNameMapper: {
    "^.+.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$":
      "<rootDir>/src/__mocks__/fileMock.js",

    // Handle module aliases
    "^@shared/(.*)$": "<rootDir>/src/shared/$1",
    "^@pages/(.*)$": "<rootDir>/src/pages/$1",
  },
  testPathIgnorePatterns: ["<rootDir>/node_modules/"],
  transformIgnorePatterns: ["/node_modules/(?!(jose))"],
  testEnvironment: "jest-environment-jsdom",
};

export default config;
