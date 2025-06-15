'use strict'
const unit = ["B", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB", "RB", "QB"] //10

function toBytes(size, Separator, IsNumber) {
    let ConBytes;

    for (let i = unit.length - 1; 0 <= i; i--) {
        if (!size.endsWith(unit[i])) continue

        size = size.replace(unit[i], "").trim() // MB -> ""
        size = parseFloat(size)

        ConBytes = size * (1024 ** i) //size = 5 MB, 5 * (1024 ** 2)

        if (isNaN(ConBytes)) return "Is NaN"
        
        if (Separator == true) {
            if (IsNumber == true) {
                return "Is string value"
            }
            return ConBytes + " B"
        }
        if (IsNumber == true) return parseFloat(ConBytes)

        return ConBytes.toString()
    }
    return "Unknown unit"
}

function toReadBytes(size, Separator, IsNumber) { //B -> KB or MB, GB, TB ...
    if (!size.endsWith("B")) /**is not B(byte)*/ return "Only B(Byte) value"

    size = size.replace("B", "").trim()
    size = parseFloat(size)

    let unitVal = 0; //1: KB, 2: MB

    while (true) {
        size /= 1024
        unitVal++

        if (size >= 1024 && unitVal < 10) /**9이하, 10 X*/ continue

        if (isNaN(size)) return "Is NaN"

        if (Separator == true) {
            if (IsNumber == true) {
                return "Is string value"
            }
            
            return size + " " + unit[unitVal]
        }

        if (IsNumber == true) return parseFloat(size)

        return size.toString()
    }
    
}

function toSetUnit(size, Separator, IsNumber, units) { // unit = MB
    for (let i = unit.length - 1; 0 <= i; i--) {
        if (!size.endsWith(unit[i])) continue

        size = size.replace(unit[i], "").trim() // MB -> ""
        size = parseFloat(size)

        while (true) {
            if (isNaN(size)) return "Is NaN"

            if (unit[i] == units.trim() || i >= 10) {
                if (Separator == true) {
                    if (IsNumber == true) {
                        return "Is string value"
                    }
                    
                    return size + " " + unit[i]
                }

                if (IsNumber == true) return parseFloat(size)
        
                return size.toString()
            }

            i < 10 && (size /= 1024, i++);
        }
    }
    return "Unknown unit"
}

function DecimalToBinary(size, Separator, IsNumber, units) { //1 GB -> 0.9313 GB(GiB)
    for (let i = unit.length - 1; 0 <= i; i--) {
        if (!size.endsWith(unit[i])) continue

        size = size.replace(unit[i], "").trim() // GB -> ""
        size = parseFloat(size)

        //i == 3

        while (true) {
            if (isNaN(size)) return "Is NaN"

            if (i == 0) {
                while (true) {
                    if (isNaN(size)) return "Is NaN"

                    if (unit[i] == units.trim() || i >= 10) {
                        if (Separator == true) {
                            if (IsNumber == true) {
                                return "Is string value"
                            }
                            
                            return size + " " + unit[i]
                        }
    
                        if (IsNumber == true) return parseFloat(size)
                
                        return size.toString()
                    }

                    i < 10 && (size /= 1024, i++);

                }
            }

            size *= 1000
            i--
        }
    }
    return "Unknown unit"
}

function BinaryToDecimal(size, Separator, IsNumber, units) {
    for (let i = unit.length - 1; 0 <= i; i--) {
        if (!size.endsWith(unit[i])) continue

        size = size.replace(unit[i], "").trim() // GB -> ""
        size = parseFloat(size)

        //i == 3

        while (true) {
            if (isNaN(size)) return "Is NaN"

            if (i == 0) {
                while (true) {
                    if (isNaN(size)) return "Is NaN"

                    if (unit[i] == units.trim() || i >= 10) {
                        if (Separator == true) {
                            if (IsNumber == true) {
                                return "Is string value"
                            }
                            
                            return size + " " + unit[i]
                        }
    
                        if (IsNumber == true) return parseFloat(size)
                
                        return size.toString()
                    }

                    i < 10 && (size /= 1000, i++);

                }
            }

            size *= 1024
            i--
        }
    }
    return "Unknown unit"
}
module.exports = {
    toBytes,
    toReadBytes,
    toSetUnit,
    DecimalToBinary,
    BinaryToDecimal
}