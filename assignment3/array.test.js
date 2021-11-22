const {
  render,
  getValues,
  sortBy,
  addTodo,
  removeTodo,
  toggleCompletedById,
  toggleCompletedAll,
  countCompletedTodos,
  getMaxId,
} = require('./arrayHof');

const todos = [
  { id: 3, content: 'HTML', completed: false },
  { id: 2, content: 'CSS', completed: true },
  { id: 1, content: 'Javascript', completed: false },
];

// 1. html 생성
test('render todos', () => {
  expect(render(todos)).toBe(`<li id="3">
  <label><input type="checkbox">HTML</label>
</li>
<li id="2">
  <label><input type="checkbox" checked>CSS</label>
</li>
<li id="1">
  <label><input type="checkbox">Javascript</label>
</li>`);
});

// 2. 특정 프로퍼티 값 추출
test('get values of "id"', () => {
  expect(getValues(todos, 'id')).toEqual([3, 2, 1]);
});
test('get values of "content"', () => {
  expect(getValues(todos, 'content')).toEqual(['HTML', 'CSS', 'Javascript']);
});
test('get values of "completed"', () => {
  expect(getValues(todos, 'completed')).toEqual([false, true, false]);
});

// 3. 프로퍼티 정렬
test("sort by 'id'", () => {
  expect(sortBy(todos, 'id')).toEqual([
    { id: 1, content: 'Javascript', completed: false },
    { id: 2, content: 'CSS', completed: true },
    { id: 3, content: 'HTML', completed: false },
  ]);
});
test("sort by 'content'", () => {
  expect(
    sortBy(
      [
        { id: 1, content: 'Javascript', completed: false },
        { id: 2, content: 'CSS', completed: true },
        { id: 3, content: 'HTML', completed: false },
      ],
      'content',
    ),
  ).toEqual([
    { id: 2, content: 'CSS', completed: true },
    { id: 3, content: 'HTML', completed: false },
    { id: 1, content: 'Javascript', completed: false },
  ]);
});
test("sort by 'completed'", () => {
  expect(
    sortBy(
      [
        { id: 1, content: 'Javascript', completed: false },
        { id: 2, content: 'CSS', completed: true },
        { id: 3, content: 'HTML', completed: false },
      ],
      'completed',
    ),
  ).toEqual([
    { id: 1, content: 'Javascript', completed: false },
    { id: 3, content: 'HTML', completed: false },
    { id: 2, content: 'CSS', completed: true },
  ]);
});

// 4. 새로운 요소 추가
test('add todo', () => {
  expect(addTodo(todos, { id: 4, content: 'Test', completed: false })).toEqual([
    { id: 4, content: 'Test', completed: false },
    { id: 3, content: 'HTML', completed: false },
    { id: 2, content: 'CSS', completed: true },
    { id: 1, content: 'Javascript', completed: false },
  ]);
});

// 5. 특정 요소 삭제
test('remove todo', () => {
  expect(removeTodo(todos, 2)).toEqual([
    { id: 3, content: 'HTML', completed: false },
    { id: 1, content: 'Javascript', completed: false },
  ]);
});

// 6. 특정 요소 프로퍼티 반전
test('toggle completed by id', () => {
  expect(toggleCompletedById(todos, 2)).toEqual([
    { id: 3, content: 'HTML', completed: false },
    { id: 2, content: 'CSS', completed: false },
    { id: 1, content: 'Javascript', completed: false },
  ]);
});

// 7. 모든 요소의 completed 프로퍼티 값을 true로 설정
test('toggle completed all', () => {
  expect(toggleCompletedAll(todos)).toEqual([
    { id: 3, content: 'HTML', completed: true },
    { id: 2, content: 'CSS', completed: true },
    { id: 1, content: 'Javascript', completed: true },
  ]);
});

// 8. completed 프로퍼티의 값이 true인 요소의 갯수 구하기
test('count completed', () => {
  expect(countCompletedTodos(todos)).toBe(1);
});

// 9. id 프로퍼티의 값 중에서 최대값 구하기
test('get max id', () => {
  expect(getMaxId(todos)).toBe(3);
});
