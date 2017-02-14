var arr = [
    { name: "Joe", age: 25 },
    { name: "amy", age: 32 },
    { name: "carol", age: 27 },
    { name: "Sabine", age: 43 },
    { name: "Onno", age: 47 }
];

var initialValue = {
    names: [],
    totalAge: 0,
    averageAge: 0
};

var result = arr.reduce(function(currentValue, item) {
    currentValue.names.push(item.name);
    currentValue.totalAge += item.age;

    //calculate running avergae
    var averageAge = currentValue.totalAge / currentValue.names.length;
    currentValue.averageAge = Math.round(averageAge);

    return currentValue;
}, initialValue);

console.log(result);