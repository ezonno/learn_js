//https://developer.mozilla.org/nl/docs/Web/JavaScript/Reference/Operators/Spread_operator

function doStuff(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
    console.log(arguments);
}

//doStuff('foo', 'bar', 2);

var arr = ['foo', 'bar', 2, 9, 5, 6, 7];
doStuff.apply(undefined, arr);

//function calls
//spread the arguments as the method parameters, no apply needed
doStuff(...arr);


var numbers = [1, 2, 3, 4];
var letters = ['a', 'b', 'c', 'd'];
var testUndef;

// basic concat
var result = [].concat(numbers).concat(letters).concat(testUndef);
console.log(result);

//concat with spread operator (spread them out in the array)
var result = [...numbers, ...letters];
console.log(result);

var result = ['extra', ...numbers, 'stuff', ...letters];
console.log(result);

//copy an array
var arr = [1, 2, 3];
var arr2 = [...arr];

arr2.push(4);
console.log(arr2);
// arr2 becomes [1,2,3,4]
// arr remains unaffected

var arr1 = [0, 1, 2];
var arr2 = [3, 4, 5];
arr1.push(...arr2);
console.log(arr1);

//array destructuring
//usefull for getting certain values out of an array and colect the rest inside another var
let [a, b, ...arrx] = [1, 2, 3, 4, 5];


console.log(a);
console.log(b);
console.log(arrx);


function doStuff2(a1, b1, remaininParams) {
    //previous way of coinverting arguments object (array like object) into an array.
    //let args = Array.prototype.slice.call(arguments);
    //let args = [...arguments];

    // spread entire arguments inside arr
    //let [a, b, ...arr] = [a1, b1, ...arguments];

    let args = [...arguments];
    let [a, b, ...arr] = args;

    console.log(a);
    console.log(b);
    console.log(arr);
}


doStuff2("a", "b", 1, 2, 3, 4, 5, 6, 7, 8);