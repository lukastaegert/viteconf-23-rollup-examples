import { defineConfig } from "rollup";
import clearDist from "./clear-dist.js";

export default defineConfig({
  input: "src/main.js",
  output: {
    dir: "dist",
    assetFileNames: "[name][extname]",
  },
  plugins: [
    clearDist(),
    {
      name: "emit-files",
      resolveId(source) {
        if (source.endsWith("emitted.js")) {
          // Make it external
          return false;
        }
      },
      generateBundle(_options, bundle) {
        // But could be emitted in any earlier hook as well
        this.emitFile({
          type: "prebuilt-chunk",
          fileName: "emitted.js",
          code: "export const foo = 'FOO'; export default 'BAR';",
          // We need to llist the exports explicitly as they will not be derived
          exports: ["default", "foo"],
        });
        // Show the generated bundle with the new entry
        console.log(bundle);
      },
    },
  ],
});
