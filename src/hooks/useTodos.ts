'use client';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import api from '@/utils/api';

export interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

const fetchTodos = async (): Promise<Todo[]> => {
  const response = await api.get('');
  return response.data;
};

const useTodos = () => {
  const queryClient = useQueryClient();

  const { data, isLoading, isError, error } = useQuery<Todo[], Error>({
    queryKey: ['todos'],
    queryFn: fetchTodos,
  });

  const addTodo = useMutation<Todo, Error, Todo>({
    mutationFn: (newTodo) =>
      api
        .post('', { ...newTodo, completed: false, userId: 1 })
        .then((res) => res.data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['todos'] });
    },
  });

  const deleteTodo = useMutation<void, Error, number>({
    mutationFn: (id) => api.delete(`/${id}`),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['todos'] });
    },
  });

  return { data, isLoading, isError, error, addTodo, deleteTodo };
};

export { useTodos, fetchTodos };
