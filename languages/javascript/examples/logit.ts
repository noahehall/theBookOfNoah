export function log(a: any, b?: any): void {
  if (arguments.length == 1 || typeof b == "undefined") console.info(a);
  // dunno, bun doesnt log a table :(
  // nope @see https://github.com/oven-sh/bun/issues/802
  else console.table({ msg: a, value: b });
}
