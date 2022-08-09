import { useState } from 'react';
import './App.css';
import { Todos } from './components/Todos';
import { Todo } from './models/todo';
import { TodoForm } from './components/TodoForm';

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodoHandler = (textTodo: string) => {
    const TodoForm = new Todo(textTodo);
    setTodos((todos) => {
      return [...todos, TodoForm];
    });
  };

  const deleteItemHandler = (todoIdToDelete: string) => {
    setTodos((todos) => {
      return todos.filter((todo) => todo.id !== todoIdToDelete);
    });
  };
  return (
    <div className="app">
      <TodoForm onAddTodo={addTodoHandler} />
      <Todos items={todos} onDeleteItem1={deleteItemHandler} />
    </div>
  );
}

export default App;
