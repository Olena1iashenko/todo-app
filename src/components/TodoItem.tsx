import clsx from 'clsx';
import Button from './ui/Button';

interface TodoItemProps {
  todo: { id: number; title: string; completed: boolean };
  onDelete?: (id: number) => void;
  onToggle?: (id: number) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, onDelete, onToggle }) => {
  return (
    <div
      className={clsx(
        'flex gap-2 items-center p-4 rounded-xl shadow-md w-full',
        {
          'bg-gray-300': todo.completed,
          'bg-cyan-200': !todo.completed,
        }
      )}
    >
      <Button
        check={todo.completed ? 'on' : 'off'}
        onClick={() => onToggle?.(todo.id)}
      />
      <p className='text-2xl flex-1 wrap-normal ml-2.5'>{todo.title}</p>
      <Button variant='deleteButton' onClick={() => onDelete?.(todo.id)}>
        Delete
      </Button>
    </div>
  );
};

export default TodoItem;
