// let a = 20 
// let b = 30
// let c = 10

let arr = [10,20,30]
console.log(arr)
console.log(typeof arr) // shows object

// we can store any data type in js array

let array = [10,20 ,"hey",'hi']
console.log(array)

// Object
// key: value
let obj = {
    user : "Puskar",
    accountNumber : 125356891233,
    balance : 1000000
}
console.log(obj)
console.log(typeof obj)
// we can also assgin function to the properties of object

// username
// password

// Object - internal implementation and hashing


// Function
// declaration
let fun = function(){
    console.log("JS is fun!!")
}
// calling the function
fun();

console.log(typeof fun)

// Type conversion - converting a data type into another type

let accountBalance = "1000000"
let num = Number(accountBalance)
console.log( typeof num, num);

// boolean to number

let x = true
let number = Number(x)
console.log(typeof number, number)

let code = "100xs"
let codeInNumber = Number(code) 
console.log(typeof codeInNumber, codeInNumber) // gives NaN - Not a Number

// Be careful when converting into number - see if it is NaN or not
// null - gets converted to - 0
// undefined - gets converted to - NaN

// Converting to String

let codedInString = String(code);
console.log(typeof codedInString, codedInString)

// boolean to string
// false - gets converted to "false"


// To Boolean


// Operator

// Arithmetic Operator
console.log(6*3+18/6-9) // this is a bad example of code - Use paranthesis

// Divide and Multiply - same precedence - L to R 
// Add and Subtract - sane precedence - L to R

// Modulus - gives remainder
console.log(20%3)

// ++ Increment Operator
// pre
// post

// -- Decrement Operator
// pre
// post

// Assignment Operators  =, +=, -=, *=, /= 

// +=  x = x + 10 


