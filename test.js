const { toBytes } = require('./');

/** toBytes Function */

console.log(toBytes('5.1GB', false, true));
//5,476,083,302.4(int)

console.log(toBytes('5.1GB', true, false));
//5,476,083,302.4 B(string)

console.log(toBytes('5.1GB', false, false));
//5,476,083,302.4(string)

console.log(toBytes('5.1GB', true, true));
//Error: Is string vaule

/** End */
