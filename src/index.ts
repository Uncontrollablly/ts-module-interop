import a from "./a";

// import b from "./b"; // File 'src/b.ts' is not a module.ts(2306)
const b = require("./b");

import c from "./c";
import c1 = require("./c");

console.log(a);
b(123);
c(456);
c1(789);
