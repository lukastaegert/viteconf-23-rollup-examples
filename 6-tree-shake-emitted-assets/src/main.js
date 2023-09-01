import foo from "emitted-used.txt";
import bar from "emitted-unused.txt";

if (true) console.log(foo);
else console.log(bar);
