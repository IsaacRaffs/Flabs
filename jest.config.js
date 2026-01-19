import nexJs from "next/jest.js";
import dotenv from 'dotenv';

dotenv.config({
  path: '.env.development',
});
 
const createJestConfig = nexJs();

const jestConfig = createJestConfig({
  setupFiles: ["dotenv/config"],
  moduleDirectories: ["node_modules", "<rootDir>"]
});

export default jestConfig;
