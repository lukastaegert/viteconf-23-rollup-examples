export const foo = "FOO";

// Creating a global variable is a side effect
globalThis.getBar = () => "BAR";

// Calling a non-standard function on the global object would also be a side
// effect, but it is not the first in this file
export const bar = getBar();
