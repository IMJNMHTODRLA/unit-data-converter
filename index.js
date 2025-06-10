'use strict'
const unit = ["B", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB", "RB", "QB"]

function toBytes(size, Separator, IsNumber) {
    let ConBytes;

    for (let i = unit.length; 0 < i; i--) {
        if (size.endsWith(unit[i])) {
            size = size.replace(unit[i], "").trim() // MB -> ""
            size = parseFloat(size)

            ConBytes = size * (1024 ** i) //size = 5 MB, 5 * (1024 ** 2)

            if (isNaN(ConBytes)) {
                return "Is NaN"
            }
            
            if (Separator == true) {
                if (IsNumber == true) {
                    return "Is string value"
                }
                return ConBytes + " B"
            }
            if (IsNumber == true) {
                return parseFloat(ConBytes)
            }

            return ConBytes.toString()
        }
    }
    return "Unknown unit"
}

function toReadBytes(size, Separator, IsNumber) { //B -> KB or MB, GB, TB ...
    if (!size.endsWith("B")) { //is not B(byte)
        return "Only B(Byte) value"
    }

    size = size.replace("B", "").trim()
    size = parseFloat(size)

    let unitVal = 0; //1: KB, 2: MB

    while (true) {
        size = size / 1024
        unitVal += 1

        if (size >= 1024) {
            continue
        }

        if (isNaN(size)) {
            return "Is NaN"
        }

        if (Separator == true) {
            if (IsNumber == true) {
                return "Is string value"
            }
            
            return size + " " + unit[unitVal]
        }

        if (IsNumber == true) {
            return parseFloat(size)
        }

        return size.toString()
    }
    
}
function toSetUnit(size, Separator, IsNumber, units) { // unit = MB

    for (let i = unit.length; 0 < i; i--) {
        if (size.endsWith(unit[i])) {
            size = size.replace(unit[i], "").trim() // MB -> ""
            size = parseFloat(size)

            while (true) {
                if (i >= 10) {
                    return "Error due to excessive units"
                }

                if (isNaN(size)) {
                    return "Is NaN"
                }

                if (unit[i] == units.trim()) {
                    if (Separator == true) {
                        if (IsNumber == true) {
                            return "Is string value"
                        }
                        
                        return size + " " + unit[i]
                    }

                    if (IsNumber == true) {
                        return parseFloat(size)
                    }
            
                    return size.toString()
                }

                size = size / 1024
                i += 1;
            }
        }
    }
    return "Unknown unit"
}
module.exports = {
    toBytes,
    toReadBytes,
    toSetUnit
}