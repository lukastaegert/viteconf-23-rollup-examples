import { defineConfig } from "rollup";

// This bundles to stdout
export default defineConfig({
  input: ["src/main1.js", "src/main2.js"],
  // necessary so that the second entry can expose the additional export
  preserveEntrySignatures: "allow-extension",
  output: {
    experimentalMinChunkSize: 1000,
  },
});
