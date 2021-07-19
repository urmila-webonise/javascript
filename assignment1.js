// Assignment No 1

// sort array in ascending and  descending
// implement stack and queue in js
// get max number and second max number from Array
// [2,1,4,55,6,7,22,0,'',2,1]

// 1.sort array in ascending and  descending 

//ascending 

let numbers = [2, 1, 4, 55, 6, 7, 22, 0, '', 2, 1];
 
numbers.sort(function (a, b) {
    return a - b;
});
console.log(numbers);

//descending
let numbers = [2, 1, 4, 55, 6, 7, 22, 0, '', 2, 1];

numbers.sort(function (a, b) {
    return b - a;
});
console.log(numbers);

//ascendinng order

let nums = [2, 1, 4, 55, 6, 7, 22, 0, '', 2, 1];

for (let i = 1; i < nums.length; i++){
    for (let j = 0; j < i; j++){
        if (nums[i] < nums[j]) {
            let temp = nums[i];
            nums[i] = nums[j];
            nums[j] = temp;
        }
    }
}
console.log(nums);

//Decending order

let nums = [2, 1, 4, 55, 6, 7, 22, 0, '', 2, 1];

for (let i = 1; i < nums.length; i++){
    for (let j = 0; j < i; j++){
        if (nums[j] < nums[i]) {
            let temp = nums[j];
            nums[j] = nums[i];
            nums[i] = temp;
        }
    }
}
console.log(nums);

//Max number

let numbers = [2, 1, 4, 55, 6, 7, 22, 0, '', 2, 1];

let max = numbers.sort(function (a, b) {
    return b - a;
})[0];
console.log(max);

//By using spread operator

let numbers = [2, 1, 4, 55, 6, 7, 22, 0, '', 2, 1];

console.log(Math.max(...numbers));

//2. implement stack and queue in js

//Stack with javascript

let stack = [];

stack.push(2);
console.log(stack);
stack.push(1);
console.log(stack);
stack.push(4);
console.log(stack);
stack.push(55);
console.log(stack);
stack.push(6);
console.log(stack);
stack.push(7);
console.log(stack);
stack.push(22);
console.log(stack);
stack.push(0);
console.log(stack);
stack.push("");
console.log(stack);
stack.push(2);
console.log(stack);
stack.push(1);
console.log(stack);

//Removing element from stack

stack.pop();
console.log(stack);
stack.pop();
console.log(stack);
stack.pop();
console.log(stack);
stack.pop();
console.log(stack);


//Queue with javascript

function Queue() {
    this.element = [];
}
//add an element
Queue.prototype.enqueue = function (e) {
    this.element.push(e);
};
//Remove an ele from front of queue

Queue.prototype.dequeue = function () {
    this.element.shift();
};
//check queue is empty or not

Queue.prototype.isEmpty = function () {
    this.element.length == 0;
};

//create a queue

let q = new Queue();
q.enqueue(2);
q.enqueue(1);
q.enqueue(4);
q.enqueue(55);
q.enqueue(6);
q.enqueue(7);
q.enqueue(22);
q.enqueue(0);
q.enqueue("");
q.enqueue(2);
q.enqueue(1);
q.dequeue();
console.log(q);



//3. second max number from Array

let numbers = [2, 1, 4, 55, 6, 7, 22, 0, '', 2, 1];

let max = numbers.sort(function (a, b) {
    return b - a;
})[1];
console.log(max);
