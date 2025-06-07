# unit-data-converter

## toBytes
**toBytes function: A function that converts units such as MB, KB, and GB to B (Byte).**

****

## toReadBytes
**toReadBytes function: A function that converts units such as B(Byte) to KB, MB, GB, TB any.**

****
****

## install
```bash
$ npm install unit-data-converter
```

## using
```js
const { toBytes, toReadBytes } = require('unit-data-converter');

/** toBytes Function */

console.log(toBytes('5GB', false, true));
//5,368,709,120(int)

console.log(toBytes('5GB', true, false));
//5,368,709,120 B(string)

console.log(toBytes('50MB', false, false));
//5,368,709,120(string)

console.log(toBytes('50MB', true, true));
//Error: Is string vaule

/** End */

/** toReadBytes */

console.log(toReadBytes('52428800 B', false, true));
//50(int)

console.log(toReadBytes('52428800 B', true, false));
//50 MB(string)

console.log(toReadBytes('52428800 B', false, false));
//50(string)

console.log(toReadBytes('52428800 B', true, true));
//Error: Is string vaule

/** End */
```