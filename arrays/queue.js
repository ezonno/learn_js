// var a = [1, 2, 3,4 ,5];
// console.log(a);
// var value = a.shift();

// console.log(a);

// a.push(6);

// console.log(a);

function Queue(values) {
    this.values = values;
}

Queue.prototype.next = function() {
    return this.values.shift();
};

Queue.prototype.push = function(value) {
    return this.values.push(value);
};

Queue.prototype.peek = function() {
    return this.values[0];
};


var q = new Queue([1,2,3,4,5,6]);
console.log(q.next());
console.log(q.next());
console.log(q.next());
console.log(q.next());
console.log(q.peek());
console.log(q.next());
console.log(q.next());
console.log(q.next());

console.log(q);

