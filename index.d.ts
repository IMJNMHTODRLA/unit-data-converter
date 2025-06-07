declare function toBytes(size: string, Separator: boolean, IsNumber: boolean): string | number;
declare function toReadBytes(size: string, Separator: boolean, IsNumber: boolean): string | number;

declare namespace toBytes{}
declare namespace toReadBytes{}

export { toBytes, toReadBytes };