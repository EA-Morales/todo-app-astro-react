import { useEffect } from 'react';
import FormComponent from './FormComponent';
import TodosComponent from './TodosComponent';
import { $Todos } from './useTodosHook';

export const WrapperReactTodos = () => {
  useEffect(() => {
    const todos = localStorage.getItem('todos');

    if (todos) {
      $Todos.set(JSON.parse(todos));
    }
  }, []);

  return (
    <>
      <FormComponent />

      <TodosComponent />
    </>
  );
};
