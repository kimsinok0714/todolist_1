# TodoList v1


- useReducer() 함수 

컴포넌트 내부에 새로운 State를 생성하는 React Hook
   
모든 useState는 useReducer로 대체 가능

상태 관리 코드를 컴포넌트 외부로 분리할 수 있다.

const [state, dispatch] = useReducer(reducer, 0);   

- 0 : state 변수 초기값
- dispatch가 상태 변화를 요청하게 되고 useReducer가 상태 변화를 실제로 처리하게될 함수(reducer)를 호출한다.
   
   
