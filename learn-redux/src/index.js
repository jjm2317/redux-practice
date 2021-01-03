import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
//프로바이더를 통해서 리액트 프로젝트에서 리덕스 적용 가능
import { Provider } from 'react-redux';
//스토어를 만들기위해 사용 
import { createStore } from 'redux';
//루트 리듀서 불러오기
//modules 디렉토리에서 index.js란 이름으로 rootReducer를 내보냈다.
//modules 디렉토리를 불러오면 index.js 를 불러온다
import rootReducer from './modules';

const store = createStore(rootReducer);
/*앱컴포넌트를 Provider로 감싸고
store 어트리뷰트로 store 값을 할당
*/
ReactDOM.render(
<Provider store={store}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
</Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
