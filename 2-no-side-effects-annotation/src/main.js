/*@__NO_SIDE_EFFECTS__*/ function foo() {
  console.log("this side effect is ignored");
}

function bar() {
  console.log("this side effect is observed");
}

// It also works with arrow functions.
/*@__NO_SIDE_EFFECTS__*/ const baz = () =>
  console.log("this side effect is ignored");

foo();
bar();
baz();

// While the above annotations are placed before function declarations,
// the traditional __PURE__ annotations go before call expressions.
// This is removed as well.
/*@__PURE__*/ bar();
