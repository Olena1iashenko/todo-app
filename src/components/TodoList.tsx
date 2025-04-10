import TodoItem from './TodoItem';
import { Todo } from '@/hooks/useTodos';

interface TodoListProps {
  todos: Todo[];
  onDelete: (id: number) => void;
  onToggle?: (id: number) => void;
}

const TodoList: React.FC<TodoListProps> = ({ todos, onDelete, onToggle }) => {
  return (
    <div className='grid grid-cols-2 gap-y-4 gap-x-5'>
      {todos?.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onDelete={onDelete}
          onToggle={onToggle}
        />
      ))}
    </div>
  );
};

export default TodoList;
