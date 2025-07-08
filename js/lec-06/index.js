// primitive data type

const num = 10;
// num =20; // this will give an error
console.log(num) 

// non-primitive data type

const obj = {
    id: 10,
    balance: 200000
}

obj.id = 30

console.log(obj);
// we can modify/update the non-primitive data types, even when we use const

const obj2 = {
    id:2,
    balance:500000
}

// obj2 = obj  --- this gives error : because we are assigning to the constant variable


// String in JS
