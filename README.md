# unit-data-converter
# Version 1.1.0

****
****

## Update

**add toSetUnit, Int val -> Float val(ex: 50 -> 50.00002142)**

****
****

## install
```bash
$ npm install unit-data-converter
```

## using:

****

### toBytes

```js
const { toBytes } = require('./');

console.log(toBytes('5.1GB', false, true));
//5,476,083,302.4(int)

console.log(toBytes('5.1GB', true, false));
//5,476,083,302.4 B(string)

console.log(toBytes('5.1GB', false, false));
//5,476,083,302.4(string)

console.log(toBytes('5.1GB', true, true));
//Error: Is string vaule
```

****

### toReadBytes

```js
const { toReadBytes } = require('./');

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
```

****

### toReadBytes

```js
const { toSetUnit } = require('./');

/** toSetUnit */

console.log(toSetUnit('1100 MB', false, true, "GB"));
//1.07421875(int))

console.log(toSetUnit('1100 MB', true, false, "GB"));
//1.07421875 GB(string)

console.log(toSetUnit('1100 MB', false, false, "GB"));
//1.07421875(string)

console.log(toSetUnit('1100 MB', true, true, "GB"));
//Error: Is string vaule

/** End */
```

****