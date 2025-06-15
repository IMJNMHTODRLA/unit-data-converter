const { BinaryToDecimal } = require('..');

/** DecimalToBinary Function */

console.log(BinaryToDecimal('0.9313225746154785GB', false, true, "GB"));
//1(int)

console.log(BinaryToDecimal('0.9313225746154785GB', true, false, "GB"));
//1 GB(string)

console.log(BinaryToDecimal('0.9313225746154785GB', false, false, "GB"));
//1(string)

console.log(BinaryToDecimal('0.9313225746154785GB', true, true, "GB"));
//Error: Is string vaule

/** End */
