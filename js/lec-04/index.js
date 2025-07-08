// Comparison Operator - == > >= <= ===
// Number to Number

let a1 = 1;
let a2 = 2;
console.log(a1==a2)
console.log(a1>a2)
console.log(a1>=a2)
console.log(a1<=a2)
console.log(a1===a2)


// less than or equal to 
// greater than or equal to

// whenever js does comparison, it automatically does the type conversion behind the scene
let num = 10 
let str = "10"
console.log(num==str) // returns true

// for comparison to happen - both data should be of same type

// ===   Strict Check
// 1. First Check if the type is same, if yes
// 2. Then check if the values are equal

let b1 =  10 
let b2 =  10
console.log(b1===b2)

// null can only be equivalent to undefined ==
// null == undefined -> true
// null === undefined -> false
console.log(undefined!=null) // false

console.log(null==0) //false
console.log(null<0) //false
console.log(null>0) //false
console.log(null<=0) //true 
console.log(null>=0) //true 


// undefined comparison
console.log(undefined==0)
console.log(undefined<0)
console.log(undefined>0)
console.log(undefined>=0)
console.log(undefined<=0)


console.log(NaN == NaN) //false
let string1 = "puskar"
let string2 = "pujan"
console.log(Number(string1)==Number(string2)) //false


let abc1 = 123;
let abc2 ="123"
let abc3 = 123
console.log(abc1==abc2==abc3) //false

// true == 123 --> false
// Whenever we compare, it always returns in true or false


// Logical Operator && || !

let age = 18
let money = 420000
console.log(age<18 && money>200)

console.log(age>10 || money>200)

console.log(!(age>10))

// Bitwise Operator - does the comparison bitwise i.e. bit by bit
console.log(4&5)  //4

//  100
// &100
//  100 => 4

// Bitwise AND & 
// Bitwise OR |
// Bitwise XOR ^ ---- 00 and 11 -> 0
// Left Shift <<
// Right Shift >>

// Left shift
console.log(5<<3)
// 5 multiply by 2 power 3 

// Right shift
console.log(20>>2)
// 20 divided by 2 power 2


// ASCII - 256 charcters
// Unicode - Supports multiple languages ans symbols

console.log(0.1+0.2) // 0.3000000000004 - approximate answer

