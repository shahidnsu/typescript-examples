function mutilply(a: number, b: number, c?: number): number {
  if (typeof c !== 'undefined') {
    return a * b * c;
  }
  return a * b;

}
let result: number = mutilply(2, 3, 5)
console.log(result)
//funciton with default parameters


function appplyDiscout(price: number, discount: number = 0.5) {
  return price * discount
}

console.log(appplyDiscout(100))
