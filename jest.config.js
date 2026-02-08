import nextJest from "next/jest.js";

const createJestConfig = nextJest({
  dir: "./"
});

const customJestConfig = {
  testEnvironment: "node",
  moduleDirectories: ["node_modules", "<rootDir>/src"]
};

export default createJestConfig(customJestConfig);