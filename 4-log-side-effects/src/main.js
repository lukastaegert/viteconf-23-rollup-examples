import { foo, bar } from "./dep.js";
// Note that the info log contains the code position in the transformed source,
// while the CLI additionally prints the location in the original source.
console.log(foo, bar);
