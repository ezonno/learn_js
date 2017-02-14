var arr = ["a", 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, "c"];


function doStuff(str, value, index) {
    var foo = index + ": " + value + " " + str;
    console.log(foo);
}

//bind argument to this particular function
arr.forEach(doStuff.bind(null, "this is cool"));