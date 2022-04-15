import React,{useCallback, useState, useRef} from 'react';
import './App.css';
// import TodoTemplate from './components/TodoTemplate';
// import TodoInsert from './components/TodoList';
import TodoTemplate from './components/TodoTemplate';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList'


function App() {
  // 초기값 배열
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: '운동하기',
      checked: true,
    },
    {
      id: 2,
      text: '요리하기',
      checked: true,
    },
    {
      id: 3,
      text: '학원하기',
      checked: false,
    }
  ]);


  const naxtId = useRef(4);
  // ref를 사용해서 변수 담기
  const onInsert = useCallback( value => {
    const todo ={
      id: naxtId.current,
      text : value,
      checked : false,
    };
    setTodos(todos.concat(todo));
    naxtId.current += 1;
  },[todos]);
  // todos 바뀌는 값 감지



  const onToggle = useCallback( (id) => {
    setTodos(todos.map(todo => todo.id === id ? {...todo, checked: !todo.checked} : todo));
  },[todos]);


  const onRemove = useCallback( id => {
    setTodos(todos.filter(todo => todo.id !== id)); // 내가 클릭한 id랑 todo id랑 같지 않은 애들만
  },[todos]);


  return (
    <>
      <div>Todo App 만들기</div>
      <TodoTemplate>
        <TodoInsert onInsert={onInsert} />
        <TodoList todos={todos} onToggle={onToggle} onRemove={onRemove} />
      </TodoTemplate>
    </>
  );
}
// 배열전달 todos라는 name으로 todos를 전달
export default App;
