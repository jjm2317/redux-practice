// 액션 타입
//카운터에서 +- 할때 몇씩 할지 정함
//ducks 패턴 사용시 문자열 앞부분에 접두사 붙입 : 다른 모듈과이름이 중복되지 않게 하려고

const SEF_DIFF = 'counter/SET_DIFF';
const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';

// 액션 생성함수
// 앞에 export : 다른 파일에서 사용
export const setDiff = diff => ({ type: SEF_DIFF, diff});
export const increase = () => ({ type: INCREASE});
export const decrease = () => ({ type: DECREASE});

//초기상태 : 모듈의 초기상태
const initialState = {
  number: 0,
  diff: 1
};

//리듀서 함수 정의
//export default : 클래스나 함수 export시 사용
export default function counter(state = initialState, action) {
  switch (action.type) {
    case SEF_DIFF:
      return {
        ...state,
        diff: action.diff
      };
    case INCREASE: 
      return {
        ...state,
        number: state.number + state.diff
      }
    case DECREASE:
      return {
        ...state,
        number: state.numbmer - state.diff
      }

    default:
        return state;
  }
} 

//액션타입 > 액션 생성함수 > 초기 상태 > 리듀서 순