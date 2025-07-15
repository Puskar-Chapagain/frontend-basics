// Arrays in JS

const arr = [1,2.3,"Puskar",true]
console.log(arr);
console.log(typeof arr);// shows object

// array can have any data type - i.e array can contain number,string,object,array,etc.

let mixedArray = [1, "hello", true, { key: "value" }, [5, 6]];
console.log(mixedArray); 

// Length of array
console.log(arr.length);

// To access elements of array
console.log(arr[0]);
// 0 - first element
// 1 - second element
// 3 - third element

// another way :
console.log(arr.at(-1));
// takes negative index too
// - 1 - last elment
// -2 - secondlast element


// copying in array
const newarr = arr
console.log(newarr);

// modifying copied array changes the original array
newarr[0] = "Hey"
console.log(arr);
console.log(newarr);
// [ 'Hey', 2.3, 'Puskar', true ]


// if we want that the new array point to the completely different array and not the orginal one
const newarr2 = structuredClone(arr)
console.log(newarr2);

newarr2[1] = "Hi" 
console.log(newarr2);
console.log(arr); // here the original array is not changed
console.log(newarr2 == arr);

// push - adds the element in the last of an array
arr.push(30)
console.log(arr);

// pop - removes the last element from the array
arr.pop()
console.log(arr);

// unshift - add element at start
arr.unshift(10)
arr.unshift(30)
console.log(arr);

// shift - delete element from start
arr.shift()
console.log(arr);

// delete  - it will delete the element but the space will still be allocated  - hole is created
delete arr[0]
console.log(arr[0]);
// try not to use these


// indexOf() - it will give the first index it encounters
console.log(arr.indexOf("Puskar"));

// lastIndexOf()
console.log(arr.lastIndexOf(true));

// includes - true or false
console.log(arr.includes("Puskar"));


// know the internal implementation of Array

// slice   - no change in the original array 
console.log(arr);
console.log(arr.slice(1,3));  // last index not included
console.log(arr);

// splice - it changes in the original array -  takes away a portion from an array
console.log(arr);
console.log(arr.splice(1,3)); // (starting index, total no of values to delete)
console.log(arr);

// (starting_index, total_no_of_values_to_delete, add_value_from_the_start_index)
console.log(arr.splice(2,2,"hey","new-valeus"));

console.log(newarr.toString());
console.log(newarr.join('*'));
console.log(newarr.join(' '));

let array_one = [2,3,45,56,7]
let array_two = [3,4,5,6]

// array_three = array_one.concat(array_two).concat(array_one)
array_three = array_one.concat(array_two, array_one)

console.log(array_three);


// creates a 2D array - i.e. array inside array | use it very carefully
array_one.push(array_two)
console.log(array_one[5][0]);

// 2D array 
let onedArray = [1,2,3,45,6,7]
let twodArray = [[1,2,3],[4,5,6],[7,8,9]]

// it is similar to writing as
// [1,2,3]
// [4,5,6]
// [7,8,9]

// to access element
console.log(twodArray[0][3]);

// to convert an 2d array into 1d
console.log(twodArray.flat());

// console.log(twodArray.flat(2));
// console.log(twodArray.flat(Infinity));

// flat(depth)
// 2d - 1 depth 
// 3d - 2 depth
// 4d - 3 depth
// not sure ? - Infinity depth

//  how to confirm if it is array or not 
console.log(Array.isArray(array_one));

let ac = new Array(2,3,4,5,6) // not recommended method
console.log(ac);

// let ac = new Array(10) --> when single value is given, it is SIZE
// let ac = new Array(2,3,4,5,6) --> when multiple values are given, they are ELEMENTS of array

