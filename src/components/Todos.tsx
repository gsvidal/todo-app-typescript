import { Todo } from '../models/todo';
import { TodoItem } from './TodoItem';

export const Todos: React.FC<{ items: Todo[]; onDeleteItem1: (todoId: string) => void }> = (props) => {
  return (
    <ul>
      {props.items.map((item) => (
        <TodoItem key={item.id} id={item.id} text={item.text} onDeleteItem2={() => props.onDeleteItem1(item.id)} />
      ))}
    </ul>
  );
};
