// 1. Date 객체를 ‘yyyy-mm-dd’ 형식의 문자열로 변환하기

// jsDoc으로 매개변수가 어떤 객체인지 알려준다.
/**
 * @param {Date} date
 * @returns {string}
 */

// mm-dd 형식이란 01-01 형식을 뜻함
// format 을 즉시 실행 함수 자유변수로 넣음으로써 formatDate를 여러 번 호출할 때 format 을 한 번만 생성하도록 한다!
// refactoring 을 잘하는 것이 진짜 실력!
const formatDate = (() => {
  const format = n => (n < 10 ? `0${n}` : `${n}`);
  return date =>
    `${date.getFullYear()}-${format(date.getMonth() + 1)}-${format(
      date.getDate(),
    )}`;
})();

// 매개변수 이름 혼란스럽지 않게 만들 것
// 1번 문제에서 date 는 Date 객체를 뜻함
// 따라서 2번 문제에서 date 를 사용할 경우 다른 개발자가 Date 객체로 오해할 수 있다.
// dateString 으로 사용하는 것이 가독성에 좋다.
// 2. 요일 구하기
const getDay = (() => {
  const days = ['일', '월', '화', '수', '목', '금', '토'];
  return dateString => `${days[new Date(dateString).getDay()]}요일`;
})();

// 3. 특정 달의 말일 구하기
const getLastDateOfMonth = (year, month) => {
  // 1월, 3월, 5월, 7월, 8월, 10월, 12월 31일
  const thirtyOne = [0, 2, 4, 6, 7, 9, 11];
  if (thirtyOne.includes(month)) {
    return 31;
  }
  // 4월, 6월, 9월, 11월 30일
  // 4의 배수 2월 윤년 29일
  // 100의 배수 2월 28일
  // 그 외 2월 28일
  if (month !== 1) return 30;
  if (year % 100 !== 0 && year % 4 === 0) return 29;
  return 28;
};

// 4. 1일의 요일을 나타내는 정수(0 ~ 6) 구하기. 0은 일요일이고 6은 토요일이다.
const getFirstDayOfMonth = (year, month) => {
  const date = new Date(year, month, 1);
  return date.getDay();
};

// 5. 말일의 요일을 나타내는 정수(0 ~ 6) 구하기. 0은 일요일이고 6은 토요일이다.
const getLastDayOfMonth = (year, month) => {
  const lastdate = getLastDateOfMonth(year, month);
  const date = new Date(year, month, lastdate);
  return date.getDay();
};

// 6. 두 날짜 사이의 일수 구하기
const diffDays = (date1, date2) =>
  Math.abs(date1 - date2) / (1000 * 60 * 60 * 24);

// 7. 2개의 Date 객체가 같은 년도/월/날짜를 가리키는지 확인하기
/**
 * @param {Date} date1
 * @param {Date} date2
 * @returns {string}
 */
// const isEqualDate = (date1, date2) => Math.floor(diffDays(date1, date2)) === 0;
// 이럴 경우 날짜가 달라도 24시간 차이 안나면 같은 날짜로 나옴
// 다시 써라
const isEqualDate = (date1, date2) =>
  date1.getFullYear() === date2.getFullYear() &&
  date1.getMonth() === date2.getMonth() &&
  date1.getDate() === date2.getDate();

module.exports = {
  formatDate,
  getDay,
  getLastDateOfMonth,
  getLastDayOfMonth,
  getFirstDayOfMonth,
  diffDays,
  isEqualDate,
};
