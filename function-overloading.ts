function add(a: number, b: number): number;
function add(a: string, b: number): string;


function add(a: any, b: any): any {
  return a + b;
}
console.log(add(12, 12))
