const {
  isPalindrome,
  replaceAtoSharp,
  countUpperCase,
  count,
  toggleCase,
  compress,
} = require('./string.js');

// 1. 유효한 팰린드롬
test('valid pallindrome', () => {
  expect(isPalindrome('A man, a plan, a canal: Panama')).toBe(true);
});
test('valid pallindrome', () => {
  expect(isPalindrome('race a car')).toBe(false);
});

// 2. 신규 아이디 추천

// 3. A를 #으로
test('repalce a to #', () => {
  expect(replaceAtoSharp('BANANA')).toBe('B#N#N#');
});

// 4. 대문자 찾기
test('count uppercase', () => {
  expect(countUpperCase('KoreaTimeGood')).toBe(3);
});

// 5. 문자 찾기
test('count char in string', () => {
  expect(count('COMPUTERPROGRAMMING', 'R')).toBe(3);
});

// 6. 대소문자 변환
test('toggle case', () => {
  expect(toggleCase('StuDY')).toBe('sTUdy');
});

// 7. 문자열 압축
test('toggle case', () => {
  expect(compress('ABBCCCE')).toBe('AB2C3E');
});
