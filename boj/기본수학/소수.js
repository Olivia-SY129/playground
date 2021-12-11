const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const start = +input[0];
const end = +input[1];

const isPrime = num => {
  if (num === 1) return false;
  if (num === 2) return true;
  const sqrt = Math.floor(Math.sqrt(num));
  for (let i = 2; i <= sqrt; i++) {
    if (num % i === 0) return false;
  }
  return true;
};

let sum = 0;
let min = Infinity;
for (let i = start; i <= end; i++) {
  if (!isPrime(i)) continue;
  sum += i;
  min = Math.min(min, i);
}

if (sum === 0) console.log(-1);
else console.log(sum + '\n' + min);
