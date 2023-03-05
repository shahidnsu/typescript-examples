function sayHello(name: string) {
  console.log(`Hello i am ${name}`)
}
sayHello('Shahid')

//funciton with defalut parameters 

function sayName(name: string = "not provided") {
  console.log(`Hello ${name}`)
}
sayName()
sayName('Shahid')

//functio with return type {

function multiply(x: number, y: number): number {
  return x * y
}

console.log(multiply(2, 3))


//function with mutliple return types 


function numOrString(x: number): string | number {
  let num: number = Math.random()
  if (num + x > 10) {
    return x.toString()
  }
  else {
    return x
  }
}

console.log(numOrString(9))


//function with return type void


function printEmoji(emoji: string) {
  console.log(`Hey ${emoji}`)
}

printEmoji(':)')


//leapyear

function leapyear(year: number): boolean {
  return ((year % 4 == 0 && year % 100 !== 0) || (year % 400 == 0))

}
console.log(leapyear(2012))
