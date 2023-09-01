import { defineConfig } from "rollup";

export default defineConfig({
  input: "src/main.js",
  experimentalLogSideEffects: true,
  output: {
    dir: "dist",
  },
});
