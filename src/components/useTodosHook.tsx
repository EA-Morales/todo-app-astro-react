import { map } from 'nanostores';

export interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

export const $Todos = map<Todo[]>([
  { id: 1, title: 'Learn React', completed: false },
  { id: 2, title: 'Learn Astro', completed: true },
  { id: 3, title: 'Learn Tailwind', completed: false },
]);

export default function useTodosHook() {
  const addTodo = (todo: Todo) => {
    $Todos.set([...$Todos.get(), todo]);
  };

  return { addTodo };
}
