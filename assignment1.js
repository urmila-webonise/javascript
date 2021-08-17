// Assignment No 1

// sort array in ascending and  descending
// implement stack and queue in js
// get max number and second max number from Array
// [2,1,4,55,6,7,22,0,'',2,1]

// 1.sort array in ascending and  descending

const numbers = [2, 1, 4, 55, 6, 7, 22, 0, "", 2, 1];

numbers.sort(function (a, b) {
  return a - b;
});
console.log(numbers);

const numbers = [2, 1, 4, 55, 6, 7, 22, 0, "", 2, 1];

numbers.sort(function (a, b) {
  return b - a;
});
console.log(numbers);

const nums = [2, 1, 4, 55, 6, 7, 22, 0, "", 2, 1];

for (let i = 1; i < nums.length; i++) {
  for (let j = 0; j < i; j++) {
    if (nums[i] < nums[j]) {
      let temp = nums[i];
      nums[i] = nums[j];
      nums[j] = temp;
    }
  }
}
console.log(nums);

const nums = [2, 1, 4, 55, 6, 7, 22, 0, "", 2, 1];

for (let i = 1; i < nums.length; i++) {
  for (let j = 0; j < i; j++) {
    if (nums[j] < nums[i]) {
      let temp = nums[j];
      nums[j] = nums[i];
      nums[i] = temp;
    }
  }
}
console.log(nums);

const numbers = [2, 1, 4, 55, 6, 7, 22, 0, "", 2, 1];

let max = numbers.sort(function (a, b) {
  return b - a;
})[0];
console.log(max);

const numbers = [2, 1, 4, 55, 6, 7, 22, 0, "", 2, 1];

console.log(Math.max(...numbers));

//2. implement stack and queue in js

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

stack.pop();
console.log(stack);
stack.pop();
console.log(stack);
stack.pop();
console.log(stack);
stack.pop();
console.log(stack);

const Queue = [];
Queue.push(2);
console.log(Queue);
Queue.push(1);
console.log(Queue);
Queue.push(4);
console.log(Queue);
Queue.push(55);
console.log(Queue);
Queue.push(6);
console.log(Queue);
Queue.push(7);
console.log(Queue);
Queue.push(22);
console.log(Queue);
Queue.push(0);
console.log(Queue);
Queue.push("");
console.log(Queue);
Queue.push(2);
console.log(Queue);
Queue.push(1);
console.log(Queue);

Queue.shift();
console.log(Queue);
Queue.shift();
console.log(Queue);
Queue.shift();
console.log(Queue);
Queue.shift();
console.log(Queue);
Queue.shift();
console.log(Queue);
Queue.shift();
console.log(Queue);
Queue.shift();
console.log(Queue);
Queue.shift();
console.log(Queue);
Queue.shift();
console.log(Queue);
Queue.shift();
console.log(Queue);
Queue.shift();
console.log(Queue);

//3. second max number from Array

const numbers = [2, 1, 4, 55, 6, 7, 22, 0, "", 2, 1];

let max = numbers.sort(function (a, b) {
  return b - a;
})[1];
console.log(max);

const numbers = [2, 1, 4, 55, 6, 7, 22, 0, "", 2, 1];
let max = 0;
let secondMax = 0;
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > max) {
    secondMax = max;
    max = numbers[i];
  } else if (numbers[i] > secondMax) {
    secondMax = numbers[i];
  }
}
console.log(secondMax);
