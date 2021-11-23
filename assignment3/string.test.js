const {
  isPalindrome,
  replaceAtoSharp,
  countUpperCase,
  count,
  toggleCase,
  compress,
} = require('./string.js');

// 1. 유효한 팰린드롬
it('is pallindrome', () => {
  expect(isPalindrome('A man, a plan, a canal: Panama')).toBe(true);
});
it('is pallindrome', () => {
  expect(isPalindrome('race a car')).toBe(false);
});

// 2. 신규 아이디 추천

// 3. A를 #으로
it('repalces "a" to "#"', () => {
  expect(replaceAtoSharp('BANANA')).toBe('B#N#N#');
});

// 4. 대문자 찾기
it('counts uppercase', () => {
  expect(countUpperCase('KoreaTimeGood')).toBe(3);
});

// 5. 문자 찾기
it('counts char in string', () => {
  expect(count('COMPUTERPROGRAMMING', 'R')).toBe(3);
});

// 6. 대소문자 변환
it('toggles case', () => {
  expect(toggleCase('StuDY')).toBe('sTUdy');
});
it('toggles case', () => {
  expect(toggleCase('army')).toBe('ARMY');
});
it('toggles case', () => {
  expect(toggleCase('ARMY')).toBe('army');
});
it('toggles case', () => {
  expect(toggleCase('sTUdy')).toBe('StuDY');
});
it('toggles case', () => {
  expect(toggleCase('sTuDy')).toBe('StUdY');
});

// 7. 문자열 압축
it('compresses string', () => {
  expect(compress('ABBCCCE')).toBe('AB2C3E');
});
