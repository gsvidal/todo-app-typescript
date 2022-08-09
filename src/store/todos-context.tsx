import React, { useState } from 'react';
import { Todo } from '../models/todo';

type TodosContextObj = {
  items: Todo[];
  addTodo: (text: string) => void;
  removeTodo: (id: string) => void;
};

type Props = {
  children?: React.ReactNode;
};

export const TodosContext = React.createContext<TodosContextObj>({
  items: [],
  addTodo: () => {},
  removeTodo: (id: string) => {},
});

export const TodosContextProvider: React.FC<Props> = (props) => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodoHandler = (textTodo: string) => {
    const TodoForm = new Todo(textTodo);
    setTodos((todos) => {
      return [...todos, TodoForm];
    });
  };

  const deleteTodoHandler = (todoIdToDelete: string) => {
    setTodos((todos) => {
      return todos.filter((todo) => todo.id !== todoIdToDelete);
    });
  };

  const contextValue: TodosContextObj = {
    items: todos,
    addTodo: addTodoHandler,
    removeTodo: deleteTodoHandler,
  };

  return <TodosContext.Provider value={contextValue}>{props.children}</TodosContext.Provider>;
};
