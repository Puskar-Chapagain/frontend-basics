console.log("Hello there, how are you ?")

// var let and const 
// var is old

let num = 10;
console.log(num)

let name = "Puskar"
console.log(name);

let id = 20;
console.log(id)

// const -> Constant 
// once assigned, can't be changed i.e. no reassignment in const
// let -> we can change

// eg.
// const ->  bankAccountNumber
// let -> bankBalance

// var is a older way of creating variables ; we don't normally use it

// number
let accountBalance = 1000000;
console.log(typeof accountBalance)

// string
let str = "hello there"
console.log(str)

let str2 = 'hey - from single quotes'
console.log(str2)

// boolean 
let statement = true
console.log(statement)
console.log(typeof statement)

// undefined  --> declared but not assigned yet 
let account;
console.log(account);

// null
let bal = null
console.log(bal)
console.log(typeof bal) // this shows object
// this is not changed because legacy code were using null


// undefined vs null


// big int
let int = 2000000000000000000000000
console.log(int)
console.log(typeof int)

// biggest assignable number
console.log(Number.MAX_SAFE_INTEGER)
console.log(Number.MIN_SAFE_INTEGER)


