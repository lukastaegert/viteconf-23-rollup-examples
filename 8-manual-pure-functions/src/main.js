function foo() {
  console.log("effect");
}
// This is manually removed via the config
foo();

function fooBar() {
  console.log("effect");
}
// This is retained because the name is no exact match to "foo"
fooBar();

const obj = {
  method() {
    console.log("effect");
  },
};
// Object methods can be removed as well when called the right way
obj.method();
