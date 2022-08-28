import { Config } from "@jest/types";

const config: Config.InitialOptions = {
  collectCoverageFrom: [
    "**/*.{js,jsx,ts,tsx}",
    "!**/*.d.ts",
    "!**/node_modules/**",
  ],
  moduleNameMapper: {
    "^@$": "<rootDir>/src",
    "^@/(.*)\\.(?!jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/src/$1",
    // // "\\.(jpg|ico|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
    // //   "<rootDir>/src/mocks/fileMock.js",
    // "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
    //   "<rootDir>/src/__mocks__/fileMock.js",
    // "\\.(css|less)$": "<rootDir>/src/mocks/fileMock.js",

    // // The regex above, doesn't work properly
    // "^.+\\.(svg|png)": `<rootDir>/src/mocks/fileMock.js`,

    // Handle module aliases
    "^@shared/(.*)$": "<rootDir>/src/shared/$1",
    "^@pages/(.*)$": "<rootDir>/src/pages/$1",
  },
  // Add more setup options before each test is run
  // setupFilesAfterEnv: ["<rootDir>/src/test/jest.setup.ts"],
  testPathIgnorePatterns: ["<rootDir>/node_modules/"],
  transformIgnorePatterns: ["/node_modules/(?!(jose))"],
  testEnvironment: "jest-environment-jsdom",
};

export default config;
