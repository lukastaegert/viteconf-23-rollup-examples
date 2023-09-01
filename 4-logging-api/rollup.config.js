import { defineConfig } from "rollup";

export default defineConfig({
  input: "src/main.js",
  // Change to "warn", "info", "debug" or "silent"
  logLevel: "info",
  output: {
    dir: "dist",
  },
  plugins: [
    {
      name: "first",
      buildStart() {
        // Logs can be complex objects
        this.warn({
          message: "This is a warning from the first plugin",
          pluginCode: "FIRST_PLUGIN_WARNING",
        });
        // Or strings, in which case Rollup creates a log object
        this.info("This is some piece of information from the first plugin");
        // debug logs are not processed by default,
        // i.e. this is a no-op unless we chance the logLevel
        this.debug({
          message: "This is a debug log from the first plugin",
          pluginCode: "FIRST_PLUGIN_MESSAGE",
        });
      },
    },
    {
      name: "second",
      onLog(level, log) {
        console.log("In second plugin: ", level, log);
        if (log.pluginCode === "FIRST_PLUGIN_WARNING") {
          console.log("This log is filtered by the second plugin.");
          // Additionally, we could use this.warn/info/debug to emit a
          // different replacement log
          return false;
        }
      },
    },
  ],
});
