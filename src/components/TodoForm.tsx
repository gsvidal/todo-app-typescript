import React, { useState, useRef } from 'react';
import classes from './TodoForm.module.css';
import { Error } from '../models/error';

export const TodoForm: React.FC<{ onAddTodo: (text: string) => void }> = (props) => {
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

    props.onAddTodo(enteredText);
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
