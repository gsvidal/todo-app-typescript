import React, { useState, useRef, useContext } from 'react';
import classes from './TodoForm.module.css';
import { Error } from '../models/error';
import { TodosContext } from '../store/todos-context';

export const TodoForm: React.FC = () => {
  const todosCtx = useContext(TodosContext);

  const todoTextInputRef = useRef<HTMLInputElement>(null);

  const [error, setError] = useState<Error>({ state: false });

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    const enteredText = todoTextInputRef.current!.value;

    if (enteredText.trim().length === 0) {
      const newError = new Error(true);
      setError(newError);
      return;
    }

    todosCtx.addTodo(enteredText);
    const newError = new Error(false);
    setError(newError);
  };

  return (
    <form onSubmit={submitHandler}>
      <label htmlFor="text">Todo Text:</label>
      <input className={classes.input} type="text" id="text" ref={todoTextInputRef} placeholder="Here goes your todo" />
      {error.state && <p>Todo field must be valid!</p>}
      <button type="submit">Add todo</button>
    </form>
  );
};
