declare function toBytes(size: string, Separator: boolean, IsNumber: boolean): string | number
declare function toReadBytes(size: string, Separator: boolean, IsNumber: boolean): string | number
declare function toSetUnit(size: string, Separator: boolean, IsNumber: boolean, unit: string): string | number
declare function DecimalToBinary(size: string, Separator: boolean, IsNumber: boolean, unit: string): string | number
declare function BinaryToDecimal(size: string, Separator: boolean, IsNumber: boolean, unit: string): string | number

declare namespace toBytes{}
declare namespace toReadBytes{}
declare namespace toSetUnit{}
declare namespace DecimalToBinary{}
declare namespace BinaryToDecimal{}

export { toBytes, toReadBytes, toSetUnit, DecimalToBinary, BinaryToDecimal };