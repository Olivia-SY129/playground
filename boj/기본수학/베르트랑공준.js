// const fs = require('fs');
// const input = fs
//   .readFileSync('/dev/stdin')
//   .toString()
//   .split('\n')
//   .map(str => +str);

const input = `1
2
10
13
100
1000
10000
100000
123456
0`
  .split('\n')
  .map(str => +str);

input.pop();

const isPrime = num => {
  if (num === 1) return false;
  if (num === 2) return true;
  const sqrt = Math.ceil(Math.sqrt(num));
  for (let i = 2; i <= sqrt; i++) {
    if (num % i === 0) return false;
  }
  return true;
};

const cntPrime = n => {
  let cnt = 0;
  for (let i = n + 1; i <= 2 * n; i++) {
    if (isPrime(i)) cnt += 1;
  }
  return cnt;
};

input.map(n => console.log(cntPrime(n)));
