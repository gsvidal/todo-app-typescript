import { TodoItem } from './TodoItem';
import { useContext } from 'react';
import { TodosContext } from '../store/todos-context';

export const Todos: React.FC = () => {
  const todosCtx = useContext(TodosContext);

  return (
    <ul>
      {todosCtx.items.map((item) => (
        <TodoItem key={item.id} id={item.id} text={item.text} onDeleteItem2={() => todosCtx.removeTodo(item.id)} />
      ))}
    </ul>
  );
};
