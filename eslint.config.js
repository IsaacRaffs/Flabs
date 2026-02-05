import { defineConfig, globalIgnores } from "eslint/config";
import js from "@eslint/js";

export default defineConfig([
  globalIgnores(["**/node_modules/", ".git/", ".next/", "pages/"]),
	{
		files: ["**/*.js"],
		plugins: { js, },
		rules: {
      "no-duplicate-imports": "error",
			"no-unused-vars": "warn",
		},
	},
]);

