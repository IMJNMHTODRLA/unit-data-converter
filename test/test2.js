const { toSetUnit } = require('..');

/** toSetUnit Function */

console.log(toSetUnit('1100 MB', false, true, "GB"));
//1.07421875(int)

console.log(toSetUnit('1100 MB', true, false, "GB"));
//1.07421875 GB(string)

console.log(toSetUnit('1100 MB', false, false, "GB"));
//1.07421875(string)

console.log(toSetUnit('1100 MB', true, true, "GB"));
//Error: Is string vaule

/** End */
