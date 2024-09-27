import './App.css'
import Header from './components/Header';
import Editor from './components/Editor';
import List from './components/List';
// import Exam from './components/Exam';
import { useState, useEffect, useRef, useReducer } from 'react';


//상태 변화 요청을 처리하는 함수
function reducer(state, action) {
  switch (action.type) {
    case 'INIT_TODOS':
      return [...action.data, ...state];
    case 'CREATE':
      return [action.data, ...state];
    case 'UPDATE':
      return state.map((todo) => {
        if (todo.id === action.targetId) {
          return {
            ...todo,
            isDone: !todo.isDone
          }
        } else {
          return todo;
        }
      });
    case 'DELETE':
      return state.filter((todo) => {
        return todo.id !== action.targetId
      });

    default:
      return state;
  }
}


// App Component : UI 랜더링
function App() {

  const idRef = useRef(3);

  const [todos, dispatch] = useReducer(reducer, [])

  useEffect(() => {
    // 컴포넌트가 마운트 되었을때 
    const data = [
      {
        id: 0,
        isDone: false,
        content: 'React 공부하기',
        date: new Date().getTime()
      },
      {
        id: 1,
        isDone: false,
        content: '빨래하기',
        date: new Date().getTime()
      },
      {
        id: 2,
        isDone: false,
        content: '대청소하기',
        date: new Date().getTime()
      }
    ];

    dispatch({ type: 'INIT_TODOS', data: data });

  }, []);


  // 상태 관리 함수
  const onCreate = (content) => {
    dispatch({
      type: 'CREATE',
      data: {
        id: idRef.current++,
        isDone: false,
        content: content,
        date: new Date().getTime()
      }
    });
  }


  const onUpdate = (targetId) => {
    dispatch({
      type: 'UPDATE',
      targetId: targetId
    });
  }


  const onDelete = (targetId) => {
    dispatch({
      type: 'DELETE',
      targetId: targetId
    });

  }



  return (
    <div className='App'>
      {/* <Exam /> */}
      <Header />
      <Editor onCreate={onCreate} />
      <List todos={todos} onUpdate={onUpdate} onDelete={onDelete} />
    </div>
  );
}

export default App
