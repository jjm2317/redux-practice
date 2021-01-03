
# React stateMng by Redux

- 20201219
- '리액트를 다루는 기술' 참고

**리액트에 리덕스를 사용하는 이유**
- 소규모 프로젝트에서는 컴포넌트의 state를 사용하는 것으로 충분
- 프로젝트 규모가 커지면 상태관리가 어려워짐

리액트 애플리케이션에서 리덕스를 사용하면 상태 업데이트에 관한 로직을 따로 분리 시킬 수 있다. => 컴포넌트 파일과 별개로 관리 => 유지 보수성 향상

여러 컴포넌트에서 동일한 상태 공유 시 유용

업데이트가 필요한 컴포넌트만 리렌더링 되도록 최적화

**react-redux 라이브러리**

- 유틸함수 connect
- 컴포넌트(Provider)

**작업 환경 설정**

```bash
$npm create react-app react-redux-tutorial
$npm i redux react-redux
```





## redux reivew

```js
import { createStore } from 'redux';

// 상태의 초깃값
const initialState = {
  counter: 0,
  text: '' ,
  list: []
};

// 액션 타입
//카운트가 발생하면 숫자 올려주기
const INCREASE = 'INCREASE';
//카운트가 발생하면 숫자 내려주기
const DECREASE = 'DECREASE';
//텍스트 값 바꿔주기
const CHANGE_TEXT = 'CHANGE_TEXT';
//리스트에 값 추가
const ADD_TO_LIST = 'ADD_TO_LIST';

//액션 생성 함수 
//액션 생성 함수는 소문자, 액션 타입은 대문자로 작성
const increase = () => ({
    type: INCREASE,
});

const decrease = () => ({
  type: DECREASE,
});

const changeText = text => ({
  type: CHANGE_TEXT,
  text
});

const addToList = item => ({
  type: ADD_TO_LIST,
  item
})
//리듀서
//액션이 발생하면 액션 객체를 파라미터로 받아온다
//리덕스에서 초기상태를 만들때 리듀서를 한번 호출한다. 그래서 기본값 할당 안넣으면 에러
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREASE:
      return {
        ...state,
        counter: state.counter + 1,
      };
    case DECREASE:
      return {
        ...state,
        counter: state.counter - 1,
      };
    case CHANGE_TEXT:
      return {
        ...state,
        text: action.text,
      }
    case ADD_TO_LIST:
      return {
        ...state,
        list: [...state.list, action.item],
      }
      default:
        return state;
  }
}

//리듀서가 완성되면 스토어를 만들수가 있다
//초기상태가 만들어진다
const store = createStore(reducer);
console.log(store.getState());

//스토어에 구독 , 디스패치

const listener = () => {
  const state = store.getState();
  console.log(state);
};
//상태가 업데이트 될 때마다 listener 함수 호출된다.
//상태의 업데이트 : 구독하면 초기상태가 설정된다
// 디스패치를 통해 액션이 발생하면 리듀서의 두번째인수로 액션객체를 받아와 호출
// 리듀서는 새로운 상태를 반환한다. 
// 상태 업데이트 완료 => 구독된 리스너 함수 호출

const unsubscribe = store.subscribe(listener);
//unsubscribe : 구독해제하고 싶을때 호출하면된다.
// unsubscribe(); 

// 액션 디스패치
// 디스패치의 인수로 액션 생성함수를 넣어준다. 
// 액션을 발생시킨다. 
// 디스패치될때마다 구독 함수가 호출된다.
store.dispatch(increase());
store.dispatch(decrease());
store.dispatch(changeText('안녕하세요'));
store.dispatch(addToList({ id: 1, text: '지만'}));

//윈도우 콘솔창에서 스토어 함수를 사용할 수 있다.
//unscribe도
window.store = store
window.unsubscribe = unsubscribe

// subscribe사용 하지 않음
// getstate 도 미들웨어 사용전까진 잘 사용하지 않는다.
//connect, useselector usestore usedispatch 등 헬퍼 hooks

```

