const { DecimalToBinary } = require('..');

/** DecimalToBinary Function */

console.log(DecimalToBinary('1GB', false, true, "GB"));
//0.9313225746154785(int)

console.log(DecimalToBinary('1GB', true, false, "GB"));
//0.9313225746154785 GB(string)

console.log(DecimalToBinary('1GB', false, false, "GB"));
//0.9313225746154785(string)

console.log(DecimalToBinary('1GB', true, true, "GB"));
//Error: Is string vaule

/** End */
