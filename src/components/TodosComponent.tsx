import { useStore } from '@nanostores/react';
import { $Todos } from './useTodosHook';

const TodosComponent = () => {
  const Todos = useStore($Todos);

  return (
    <div>
      {Todos.map((t) => (
        <div key={t.id}>{t.title}</div>
      ))}
    </div>
  );
};

export default TodosComponent;
