const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');
const numbers = input[1].split(' ').map(str => +str);

const isPrime = num => {
  if (num === 1) return false;
  if (num === 2) return true;

  const sqrt = Math.floor(Math.sqrt(num));
  for (let i = 2; i <= sqrt; i++) {
    if (num % i === 0) return false;
  }
  return true;
};
const prime = nums => nums.filter(num => isPrime(num)).length;

console.log(prime(numbers));
