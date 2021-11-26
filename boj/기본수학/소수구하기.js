const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split(' ');

const start = +input[0];
const end = +input[1];

const isPrime = num => {
  if (num === 1) return false;
  const sqrt = Math.floor(Math.sqrt(num));
  for (let i = 2; i <= sqrt; i++) {
    if (num % i === 0) return false;
  }
  return true;
};

let arr = [];
for (let i = start; i <= end; i++) {
  if (!isPrime(i)) continue;
  arr.push(i);
}

console.log(arr.join('\n'));
