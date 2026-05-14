// for (let i = 0; i < 5; i++){
//     console.log(i);
// }

// for (let i = 0; i < 11; i++){
//     console.log(i);
// }

// let count = 0;

// while (count <3){
//     console.log("count:", count)
//     count++;
// }

// let number = 5;

// while (number > 0){
//     console.log("number:", number)
//     number -= 1;
// }

// let doValue = 0;
// do {
//     console.log("value:", doValue);
//     doValue++;
// } while (doValue < 3);

// for (let i = 0; i <10; i++){
//     if (i === 4) {
//         break;
//     }
//     console.log(i);
// }

// for (let i = 0; i < 11; i++){
//     if (i === 5){
//         i++;
//     }
//     if (i === 9){
//         break;
//     }
//     console.log(i);
// }

// for (let i = 1; i <= 3; i++) {
//     for (let j = 1; j <=3; j++){
//         console.log(`i = ${i}, j = ${j}`);
//     }
// }

// for (let i = 1; i <= 4; i++) {
//     let a = "";
//     for (let j = 1; j <= i; j++){
//         a += "*";
//     }
//     console.log(a);
// }

// function sum(a, b) {
//     return a + b;
// }

// console.log(sum(3, 5))

// function multiply(a, b) {
//     return a * b;
// }

// console.log(multiply(3, 5))

// function sayHello(name) {
//     console.log(`hello, ${name}`);
// }
// sayHello("vvvv")

// function  printInfo(name, age) {
//     console.log(`hello ${name}, u ${age}!`);
// }
// printInfo("nata", 18);

// function greet(name = "гость") {
//     console.log("привет, " + name);
// }
// greet();
// greet("anastasia");

// function calculateDiscount(price = 0, discount = 10) {
//     console.log(`итого: ${price} rub, ${discount}%` );
// }
// calculateDiscount();
// calculateDiscount(1000);

// const add = function (a, b) {
//     return a + b;
// };
// console.log(add(2, 3));

// function makeCounter() {
//     let count = 0;
//     return function () {
//         count++;
//         return count;
//     };
// }
// const counter = makeCounter()
// console.log(counter());
// console.log(counter());
// console.log(counter());

function sumFunc(a, b) {
    return a + b;
}
const sumFunc2 = (a, b) => a + b;
const double = x => x * 2;
const sumFunc3 = (a, b) => a + b;
const sayGreeting = () => console.log("hello");
const square = x => x * x;
const calculate = (a, b) => {
    let result = a + b;
    return result * 2;
}
