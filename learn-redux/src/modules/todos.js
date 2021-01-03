//상태 하나당 하나의 파일로 관리한다.

//액션 타입
const ADD_TODO = 'todos/ADD_TODO';
const TOGGLE_TODO = 'todos/TOGGLE_TODO';

//새로운 todo 생성을 위한 id 값 변수 저장
let nextId = 1;
//액션 객체에는 변화를 줄 요소에 대해서 기술
//addTodo: id와 text
export const addTodo = text => ({
  type: ADD_TODO,
  todo: {
    id: nextId++,
    text
  }
});
//특정 id를 선택해서 토글하는 작업
export const toggleTodo = id => ({
  type: TOGGLE_TODO,
  id
});

const initialState = [
  /*
  {
    id: 1,
    text: 'ex'
    done: false
  }
  */ 
];

export default function todos(state = initialState, action) {
  switch(action.type) {
    case ADD_TODO:
      return [
        ...state,
        { ...action.todo, done: false}
      ];
    case TOGGLE_TODO:
      return state.map(todo => action.id !== todo.id ? {...todo} : {...todo, done: !todo.done});
    default:
      return state;
  }
}