const date = new Date();

// 1. Date 객체를 ‘yyyy-mm-dd’ 형식의 문자열로 변환하기
const formatDate = date =>
  `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;

// 2. 요일 구하기
const getDay = date => {
  const days = [
    '일요일',
    '월요일',
    '화요일',
    '수요일',
    '목요일',
    '금요일',
    '토요일',
  ];
  return days[date.getDay()];
};

// 3. 특정 달의 말일 구하기
const getLastDateOfMonth = (year, month) => {
  // 1월, 3월, 5월, 7월, 8월, 10월, 12월 31일
  const thirtyOne = [0, 2, 4, 6, 7, 9, 11];
  if (thirtyOne.includes(month)) {
    return 31;
  } else {
    // 4월, 6월, 9월, 11월 30일
    // 4의 배수 2월 윤년 29일
    // 100의 배수 2월 28일
    // 그 외 2월 28일
    if (month !== 1) return 30;
    if (year % 100 !== 0 && year % 4 === 0) return 29;
    return 28;
  }
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
const diffDays = (date1, date2) => {
  return Math.abs(date1 - date2) / (1000 * 60 * 60 * 24);
};

// 7. 2개의 Date 객체가 같은 년도/월/날짜를 가리키는지 확인하기
const isEqualDate = (date1, date2) => {
  return Math.floor(diffDays(date1, date2)) === 0;
};

module.exports = {
  formatDate,
  getDay,
  getLastDateOfMonth,
  getLastDayOfMonth,
  getFirstDayOfMonth,
  diffDays,
  isEqualDate,
};
