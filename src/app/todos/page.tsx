'use client';
import TodoForm from '@/components/TodoForm';
import TodoList from '@/components/TodoList';
import Button from '@/components/ui/Button';
import { Todo, useTodos } from '@/hooks/useTodos';
import { useEffect, useState } from 'react';
import Loading from '../loading';

export default function TodoPage() {
  const { data, isLoading, isError, error, addTodo, deleteTodo } = useTodos();
  const [todos, setTodos] = useState<Todo[]>([]);
  const [showAll, setShowAll] = useState(false);
  const [filter, setFilter] = useState<'all' | 'completed' | 'incomplete'>(
    'all'
  );
  const filteredTodos = todos.filter((todo) => {
    if (filter === 'completed') return todo.completed;
    if (filter === 'incomplete') return !todo.completed;
    return true;
  });
  const first10Todos = filteredTodos.slice(0, 10);

  useEffect(() => {
    if (data) {
      setTodos(data);
    }
  }, [data]);

  const handleDeleteTodo = (id: number) => {
    deleteTodo.mutate(id);
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  const handleAddTodo = (title: string) => {
    const randomId = Math.floor(Math.random() * 1000000);
    addTodo.mutate({
      id: randomId,
      userId: 1,
      title,
      completed: false,
    });
    setTodos((prevTodos) => [
      {
        id: randomId,
        userId: 1,
        title,
        completed: false,
      },
      ...prevTodos,
    ]);
  };

  const handleToggleTodo = (id: number) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  if (isLoading) return <Loading />;
  if (isError) return <p>Error: {error?.message}</p>;

  return (
    <div className='flex flex-col gap-8 p-20 bg-gradient-to-br from-blue-400 via-pink-400 to-yellow-300 '>
      <TodoForm onAdd={handleAddTodo} />
      <div className='flex justify-between'>
        <Button onClick={() => setShowAll(!showAll)} variant='linkButton'>
          {showAll ? 'Show Less' : 'Show All'}
        </Button>
        <div className='flex gap-2'>
          <Button
            onClick={() => setFilter('all')}
            variant={filter === 'all' ? 'outline' : 'linkButton'}
          >
            All
          </Button>
          <Button
            onClick={() => setFilter('completed')}
            variant={filter === 'completed' ? 'outline' : 'linkButton'}
          >
            Completed
          </Button>
          <Button
            onClick={() => setFilter('incomplete')}
            variant={filter === 'incomplete' ? 'outline' : 'linkButton'}
          >
            Incomplete
          </Button>
        </div>
      </div>
      <TodoList
        todos={showAll ? filteredTodos : first10Todos}
        onDelete={handleDeleteTodo}
        onToggle={handleToggleTodo}
      />
    </div>
  );
}
