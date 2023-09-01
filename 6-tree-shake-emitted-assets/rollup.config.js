import { defineConfig } from "rollup";

// This bundles to stdout
export default defineConfig({
  input: "src/main.js",
  output: {
    assetFileNames: "[name][extname]",
  },
  plugins: [
    {
      name: "emit-files",
      resolveId(source) {
        if (source.startsWith("emitted")) {
          return source;
        }
      },
      load(id) {
        if (id.startsWith("emitted")) {
          const referenceId = this.emitFile({
            type: "asset",
            source: id,
            name: id,
            // Change this line to see what happens
            needsCodeReference: true,
          });
          return `export default import.meta.ROLLUP_FILE_URL_${referenceId};`;
        }
      },
    },
  ],
});
