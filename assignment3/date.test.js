const {
  formatDate,
  getDay,
  getLastDateOfMonth,
  getLastDayOfMonth,
  getFirstDayOfMonth,
  diffDays,
  isEqualDate,
} = require('./date.js');

const date = new Date();

// 1. Date 객체를 ‘yyyy-mm-dd’ 형식의 문자열로 변환하기
test('change formate of date', () => {
  expect(formatDate(date)).toBe('2021-11-22');
});

// 2. 요일 구하기
test('get day', () => {
  expect(getDay(date)).toBe('월요일');
});

// 3. 특정 달의 말일 구하기
test('get last date of month', () => {
  expect(getLastDateOfMonth(2021, 0)).toBe(31);
});
test('get last date of month', () => {
  expect(getLastDateOfMonth(2021, 1)).toBe(28);
});
test('get last date of month', () => {
  expect(getLastDateOfMonth(2000, 1)).toBe(28);
});
test('get last date of month', () => {
  expect(getLastDateOfMonth(2004, 1)).toBe(29);
});

// 4. 1일의 요일을 나타내는 정수(0 ~ 6) 구하기. 0은 일요일이고 6은 토요일이다.
test('get first day of month', () => {
  expect(getFirstDayOfMonth(2021, 0)).toBe(5);
});
test('get first day of month', () => {
  expect(getFirstDayOfMonth(2021, 11)).toBe(3);
});

// 5. 말일의 요일을 나타내는 정수(0 ~ 6) 구하기. 0은 일요일이고 6은 토요일이다.
test('get last day of month', () => {
  expect(getLastDayOfMonth(2021, 0)).toBe(0);
});
test('get last day of month', () => {
  expect(getLastDayOfMonth(2021, 11)).toBe(5);
});

// 6. 두 날짜 사이의 일수 구하기
test('get difference btw two dates', () => {
  expect(diffDays(new Date('2021/01/01'), new Date('2021/12/31'))).toBe(364);
});

// 7. 2개의 Date 객체가 같은 년도/월/날짜를 가리키는지 확인하기
test('get difference btw two dates', () => {
  expect(isEqualDate(new Date('2021/07/24'), new Date('2021/07/24'))).toBe(
    true,
  );
});
test('get difference btw two dates', () => {
  expect(isEqualDate(new Date('2021/07/24'), new Date('2022/07/2'))).toBe(
    false,
  );
});
