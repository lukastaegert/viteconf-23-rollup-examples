const foo = "FOO";

// Creating a global variable is a side effect
globalThis.getBar = () => "BAR";

// Calling a non-standard function on the global object would also be a side
// effect, but it is not the first in this file
const bar = getBar();

// Note that the info log contains the code position in the transformed source,
// while the CLI additionally prints the location in the original source.
console.log(foo, bar);
