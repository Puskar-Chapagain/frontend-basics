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
let str1 = "Hello there"
let str2 = 'Hey'
let str3 = `Hi` // modern way , can include variables and js code inside it too
console.log(str1, str2, str3)


let price = 50;
console.log(`Price of the tomato is: ${price}`);

// string concatenation
let s1 = "hello how are you"
let s2 = "there"
console.log(s1 + s2);


// length is the only property in string
console.log(str1.length);

// printing quotes too and next line
console.log(`"Teacher's \n Day"`);

// escape character  -> \
console.log("Hey there \\n line escaped")

// string are indexed
console.log(s1[0])


// String 

console.log(s1.charAt(0));

// to uppercase and lowercase
console.log(s1.toLowerCase());
console.log(s1.toUpperCase());

// no changes to the original string
// when we call the function
// new string gets created and it returns that string

// Searching in String

// indexOf - returns the first index
console.log(s1.indexOf("llo"));

// lastIndexOf - returns the last index
console.log(s1.lastIndexOf("o"));
// if not present returns -1

//includes - returns true or false
console.log(s1.includes("hell"));


// Extracting Subtrings 
console.log(s1.slice(0,3));
// last index does not get included i.e. only till 3


// substring
console.log(s1.substring(0,3));

// slice vs substring 
// slice can take negative index also
console.log(s1.slice(-5,-1)); 
// here the start index should be less than the last index
// -5 < -1
// or rather say the starting index should be before the last index


// replace and replaceAll
let Greetings  = "Hello Puskar. Good to know you,Puskar"
console.log(Greetings.replace("Puskar", "Pujan"));
// replace - replaces only the first occurence of the string

// replaceAll
console.log(Greetings.replaceAll("Puskar", "Pujan"));
// replaceAll - replaces all the occurence of the string

// convert the string into an array
// split 
let yWords = "Money, Honey, Sunny, Funny"
console.log(yWords.split(", "));
// console.log(yWords.split("! "));

// delimitter


// trim - removes starting and end spaces
let withoutTrim = " random string with   multiple spaces  "
console.log(withoutTrim.trim());

// trimStart()
// trimEnd()

// New way to create string - using new keyword - less preferred though 
let latestString = new String("Hello there how are you")
console.log(latestString);
console.log(typeof latestString); //object
// memory is allocated in the heap in this type of string
// because it is object behind the scene

// OOPS in JS are rarely used



