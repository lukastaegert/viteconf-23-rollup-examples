import { defineConfig } from "rollup";

export default defineConfig({
  input: "src/main.js",
  output: {
    dir: "dist",
  },
  plugins: [
    {
      name: "test-resolver",
      async buildStart() {
        // resolvedBy: 'rollup'
        console.log(await this.resolve("src/main.js"));
        // resolvedBy: 'test-resolver'
        console.log(await this.resolve("virtual1"));
        // resolvedBy: 'another-plugin'
        console.log(await this.resolve("virtual2"));
      },
      resolveId(source) {
        if (source === "virtual1") {
          return { id: source };
        }
        if (source === "virtual2") {
          // If we return the value of this.resolve, the name of the actually
          // resolving plugin will be used as resolvedBy.
          // Or we can set the value manually.
          return { id: source, resolvedBy: "another-plugin" };
        }
      },
      load(id) {
        if (id.startsWith("virtual")) {
          return `export default ${JSON.stringify(id)};`;
        }
      },
    },
  ],
});
