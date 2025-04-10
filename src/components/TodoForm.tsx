import { useState } from 'react';
import Button from './ui/Button';

interface TodoFormProps {
  onAdd: (title: string) => void;
}

const TodoForm: React.FC<TodoFormProps> = ({ onAdd }) => {
  const [newTodoTitle, setNewTodoTitle] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newTodoTitle.trim()) {
      onAdd(newTodoTitle);
      setNewTodoTitle('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className='flex gap-2.5 items-center'>
      <input
        type='text'
        value={newTodoTitle}
        onChange={(e) => setNewTodoTitle(e.target.value)}
        placeholder='Enter new todo'
        className='border-2 border-cyan-900 p-2 pl-5 rounded-2xl w-full shadow-2xl h-[50px] text-xl'
      />
      <Button type='submit' variant='addButton'>
        Add Todo
      </Button>
    </form>
  );
};

export default TodoForm;
