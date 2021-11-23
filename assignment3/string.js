// 1. 유효한 팰린드롬
const isPalindrome = s => {
  const str = s.toLowerCase().replace(/[^a-z0-9]/g, '');
  return str === [...str].reverse().join('');
};

// 2. 신규 아이디 추천
const idRecommend = newId => {
  return newId
    .toLowerCase() // 1
    .replace(/[^\w-_.]/g, '') // 2
    .replace(/\.+/g, '.') // 3
    .replace(/^\.|\.$/g, '') // 4
    .replace(/^$/, 'a') // 5
    .slice(0, 15)
    .replace(/\.$/, '') // 6
    .replace(/.+/, match =>
      match.length > 2
        ? match
        : match + match[match.length - 1].repeat(3 - match.length),
    );
};

// 3. A를 #으로
const replaceAtoSharp = str => str.replace(/A/g, '#');

// 4. 대문자 찾기
const countUpperCase = str => str.match(/[A-Z]/g).length;

// 5. 문자 찾기
const count = (str, char) => {
  const regExp = new RegExp(char, 'g');
  return str.match(regExp).length;
};

// 6. 대소문자 변환
const toggleCase = str => {
  return str.replace(
    /([a-z]+)|([A-Z]+)/g,
    (_, lowercase, uppercase) =>
      (lowercase && lowercase.toUpperCase()) ||
      (uppercase && uppercase.toLowerCase()),
  );
};

// 7. 문자열 압축
const compress = str => {
  return str.replace(/(.)\1+/g, match => match[0] + match.length);
};

module.exports = {
  isPalindrome,
  idRecommend,
  replaceAtoSharp,
  countUpperCase,
  count,
  toggleCase,
  compress,
};
