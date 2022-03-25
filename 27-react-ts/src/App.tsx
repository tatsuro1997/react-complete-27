import Todos from './components/Todos';
import Todo from './modals/todo';
import NewTodo from './components/NewTodo';

function App() {
  const todos = [
    new Todo('Learn React'),
    new Todo('Learn TS'),
  ];

  const addTodoHanlder = (todoText: string) => {

  };

  return (
    <div>
      <NewTodo onAddTodo={addTodoHanlder} />
      <Todos items={todos} />
    </div>
  );
}

export default App;
