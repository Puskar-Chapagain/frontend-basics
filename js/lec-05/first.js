let a = 10;
let  b = a;

b = 30;
console.log(a)
console.log(b)

// Primitive vs Non-Primitive

// Primitve Data Types - immutable
// Non-Primitive Data Types - mutable


// Object example

let obj1 = {
    id: 20,
    name: "Puskar"
}

let obj2 = obj1;
console.log(obj1);
console.log(obj2);

obj2.id = 30
console.log(obj1);
console.log(obj2);

// if I copy an object into antoher object and make some changes,
// the changes will reflect on both object
// because both the object internally are point to the same thing

// This doesn't happen with the case of primitive data type


// Primitive data types are stored in Stack
    // - store on a specific location/ serially one on top of another

// Non-primitive data types are stored in heap
    // - store where you find space



