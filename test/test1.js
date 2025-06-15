const { toReadBytes } = require('..');

/** toReadBytes */

console.log(toReadBytes('52428811 B', false, true));
//50.00001049041748(int)

console.log(toReadBytes('52428811 B', true, false));
//50.00001049041748 MB(string)

console.log(toReadBytes('52428811 B', false, false));
//50.00001049041748(string)

console.log(toReadBytes('52428811 B', true, true));
//Error: Is string vaule

/** End */