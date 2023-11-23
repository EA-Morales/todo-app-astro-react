import { useStore } from '@nanostores/react';
import { $Todos } from './useTodosHook';
import TodoComponent from '../components/TodoComponent';

const TodosComponent = () => {
  const Todos = useStore($Todos);

  return (
    <div>
      {Todos.map((todo) => (
        <TodoComponent
          key={todo.id}
          title={todo.title}
          id={todo.id}
          completed={todo.completed}
        />
      ))}
    </div>
  );
};

export default TodosComponent;
