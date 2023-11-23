import { map } from 'nanostores';

export interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

export const $Todos = map<Todo[]>([]);

export default function useTodosHook() {
  const addTodo = (todo: Todo) => {
    $Todos.set([...$Todos.get(), todo]);

    localStorage.setItem('todos', JSON.stringify($Todos.get()));
  };

  const removeTodo = (id: number) => {
    $Todos.set($Todos.get().filter((t) => t.id !== id));

    localStorage.setItem('todos', JSON.stringify($Todos.get()));
  };

  const toggleCompleted = (id: number) => {
    $Todos.set(
      $Todos
        .get()
        .map((t) => (t.id === id ? { ...t, completed: !t.completed } : t)),
    );

    localStorage.setItem('todos', JSON.stringify($Todos.get()));
  };

  return { addTodo, removeTodo, toggleCompleted } as const;
}
