
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


