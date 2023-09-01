// The shared file has a side effect but this does not matter here as both
// entries import it anyway.
console.log("effect");
export default "shared value";
