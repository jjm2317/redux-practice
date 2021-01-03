//루트 리듀서
//두개의 리듀서 파일을 하나로 결합
import { combineReducers } from 'redux';
import counter from './counter';
import todos from './todos';

//루트리듀서 함수
//만들었던 모양대로 각각의 상태를 지니고 있다. 
const rootReducer = combineReducers({
  counter, 
  todos
});

export default rootReducer;

//두개의 리덕스 모듈을 만들었고 루트리듀서로 합췄다.
