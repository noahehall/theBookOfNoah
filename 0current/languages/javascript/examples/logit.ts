export function log(value: any): void;
export function log(msg: string, value: any): void;
export function log(value: any, msg: string = ""): void {
  // dunno, bun doesnt log a table :(
  // nope @see https://github.com/oven-sh/bun/issues/802
  console.table({ msg, value });
}
