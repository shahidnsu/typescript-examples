function sayHello(name) {
    console.log("Hello i am ".concat(name));
}
sayHello('Shahid');
//funciton with defalut parameters 
function sayName(name) {
    if (name === void 0) { name = "not provided"; }
    console.log("Hello ".concat(name));
}
sayName();
sayName('Shahid');
//functio with return type {
function multiply(x, y) {
    return x * y;
}
console.log(multiply(2, 3));
//function with mutliple return types 
function numOrString(x) {
    var num = Math.random();
    if (num + x > 10) {
        return x.toString();
    }
    else {
        return x;
    }
}
console.log(numOrString(9));
//function with return type void
function printEmoji(emoji) {
    console.log("Hey ".concat(emoji));
}
printEmoji(':)');
//leapyear
function leapyear(year) {
    return ((year % 4 == 0 && year % 100 !== 0) || (year % 400 == 0));
}
console.log(leapyear(2012));
