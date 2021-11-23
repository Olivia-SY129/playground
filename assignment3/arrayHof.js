// 1. html 생성
const render = todos =>
  todos
    .map(obj => {
      const { id, content, completed } = obj;
      return `<li id="${id}">
  <label><input type="checkbox"${completed ? ' checked' : ''}>${content}</label>
</li>`;
    })
    .join('\n');

// 2. 특정 프로퍼티 값 추출
const getValues = (todos, key) => todos.map(obj => obj[key]);

// 3. 프로퍼티 정렬
// const sortBy = (todos, key) =>
//   [...todos].sort((a, b) => {
//     if (typeof a[key] === 'number' || typeof a[key] === 'boolean')
//       return a[key] - b[key];
//     if (typeof a[key] === 'string') return a[key].localeCompare(b[key]);
//   });

const sortBy = (todos, key) =>
  [...todos].sort((todo1, todo2) =>
    todo1[key] > todo2[key] ? 1 : todo1[key] < todo2[key] ? -1 : 0,
  );

// 4. 새로운 요소 추가
const addTodo = (todos, newTodo) => [newTodo, ...todos];

// 5. 특정 요소 삭제
const removeTodo = (todos, id) => todos.filter(obj => obj.id !== id);

// 6. 특정 요소 프로퍼티 반전
const toggleCompletedById = (todos, id) => {
  return todos.map(obj => {
    // const newObj = { ...obj };
    // if (obj.id === id) {
    //   newObj.completed = !obj.completed;
    // }
    // return newObj;

    // 업데이트할 프로퍼티는 반드시 뒤에 작성할 것!
    return obj.id === id ? { ...obj, completed: !obj.completed } : obj;
  });
};

// 7. 모든 요소의 completed 프로퍼티 값을 true로 설정
const toggleCompletedAll = todos => {
  return todos.map(obj => {
    // const newObj = { ...obj };
    // newObj.completed = true;
    // return newObj;

    return { ...obj, completed: true };
  });
};

// 8. completed 프로퍼티의 값이 true인 요소의 갯수 구하기
const countCompletedTodos = todos => {
  return todos.filter(obj => obj.completed).length;
};

// 9. id 프로퍼티의 값 중에서 최대값 구하기
const getMaxId = todos => {
  // return todos.reduce((acc, obj) => Math.max(obj.id, acc), 0);
  return Math.max(...todos.map(todo => todo.id), 0);
};

module.exports = {
  render,
  getValues,
  sortBy,
  addTodo,
  removeTodo,
  toggleCompletedById,
  toggleCompletedAll,
  countCompletedTodos,
  getMaxId,
};
