var RSVP = require("rsvp");

//The map functions as a function to transform 1 array into another.

var arr = ["a", 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, "c"];

var newArr = arr.map(function(item) {
    return item + " modified";
});

console.log(newArr);

//map 1 object into another
var arr = [
    { name: "Joe", age: 25 },
    { name: "amy", age: 32 },
    { name: "carol", age: 27 }
];

var newArr = arr.map(function(item) {
    return {
        name: item.name,
        detail: {
            age: item.age
        }
    };
});

console.log(newArr);


//promises with forEach

var promises = [];
arr.forEach(function(item) {
    var promise = new RSVP.Promise(function(resolve) {
        console.log(item.name);
        resolve();
    });

    promises.push(promise);
});

RSVP.all(promises)
    .then(function() {
        console.log("done");
    });


var promises = arr.map(function(item) {
    return new RSVP.Promise(function(resolve) {
        console.log(item.name);
        resolve();
    });
});

RSVP.all(promises)
    .then(function() {
        console.log("done");
    });

function processItem(item) {
    return new RSVP.Promise(function(resolve) {
        console.log(item.name);
        resolve({
            firstName: item.name,
            detail: {
                age: item.age,
                email: item.name + "@example.com"
            }
        });
    });
}

function displayItems(items) {
    items.forEach(function(item) {
        console.log(item);
    });
}

var promises = arr.map(processItem);

RSVP.all(promises)
    .then(displayItems);