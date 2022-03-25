import { useState } from 'react';

import Todos from './components/Todos';
import Todo from './modals/todo';
import NewTodo from './components/NewTodo';

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodoHanlder = (todoText: string) => {
    const newTodo = new Todo(todoText);

    setTodos((prevTodos) => {
      return prevTodos.concat(newTodo);
    });
  };

  return (
    <div>
      <NewTodo onAddTodo={addTodoHanlder} />
      <Todos items={todos} />
    </div>
  );
}

export default App;
