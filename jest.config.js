import nextJest from "next/jest.js";
import dotenv from 'dotenv';

dotenv.config({
  path: '.env.development',
});
 
const createJestConfig = nextJest({
  dir: ".",
});

const jestConfig = createJestConfig({
  moduleDirectories: ["node_modules", "<rootDir>"],
  testTimeout: 10000,
});

export default jestConfig;
