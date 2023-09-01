// We can use destructing in "then"...
import("./dynamic.js").then(({ foo }) => console.log(foo));

//... or when awaiting the import
const { bar } = await import("./dynamic.js");
console.log(bar);

// In any case, only "foo" and "bar" are included in the bundle
