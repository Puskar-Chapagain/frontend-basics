// Math in JS

let num1 = 231
let num2 = new Number(231)
let num3 = new Number(231)
// new keyword - memmory allocation in heap

console.log(num2);
console.log(typeof num2); // object

console.log(num1 == num2); // true
console.log(num2 == num3); // false


// Methods in number
let num = 231.6
console.log(num.toFixed(2)); // 231.60 - fix two digits after decimal
console.log(num.toPrecision(6)); //231 - precisely 6 digits before + after decimal 
console.log(num.toExponential(2));
console.log(typeof num.toString());
console.log(num.valueOf());

// Math Object and its properties
console.log(Math.E);

console.log(Math.PI);

// Math Object and its Methods

console.log(Math.random());
// 0 <= (generated random value) < 1

// to generate a random number from 0 to 9 
console.log((Math.random()*10).toFixed(0));  // this will generate string
// another way 
console.log(Math.floor(Math.random()*10));  // this will generate number


// floor and ceil
let number = 23.1
console.log(Math.floor(number)); 
console.log(Math.ceil(number));

// floor - takes the lower number
// ceil - takes the higher number
// note : this is not like rounding off 

// generate 1 to 10 
console.log((Math.floor(Math.random()*10)+1));

// generate 11 - 20 --> +11

// min = 40 max = 50 
// console.log(Math.floor(Math.random()*(max-min+1)+min));

// 0 to 10 
console.log(Math.floor(Math.random()*11));
// 2 to 12 
console.log(Math.floor(Math.random()*11)+2);

// 30 to 40
console.log(Math.floor(Math.random()*(40-30+1)+30))


// Ludo - 1 to 6
console.log(Math.floor(Math.random()*(6-1+1)+1));

// Is it used to generate OTP ? NO. 
// output of Math.random can be guessed 

// how ? - Math.random uses system clock + some operation/algo ==> random number generate
// if someone has access to your system - it can be guessed...so it is not used to generate any sensitive info like OTP

// even when our system is off - system clock is running all the time

// How to generate OTP is completely different topic 


