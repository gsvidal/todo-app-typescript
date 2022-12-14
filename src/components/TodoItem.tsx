import classes from './TodoItem.module.css';

export const TodoItem: React.FC<{
  text: string;
  id: string;
  onDeleteItem2: (todoId: string) => void;
}> = (props) => {
  const clickHandler = (todoId: string) => {
    props.onDeleteItem2(todoId);
  };

  return (
    <li className={classes.item}>
      {props.text}
      <span className={classes['icon-delete']} onClick={() => clickHandler(props.id)}></span>
    </li>
  );
};
