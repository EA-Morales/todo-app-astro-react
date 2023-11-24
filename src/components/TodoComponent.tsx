import useTodosHook from '../components/useTodosHook';

export interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

const TodoComponent = ({ id, title, completed }: Todo) => {
  const { toggleCompleted, removeTodo } = useTodosHook();

  return (
    <div
      className='flex items-center justify-between gap-4 rounded-lg bg-slate-800 p-4'
      key={id}
    >
      {completed ? (
        <button onClick={() => toggleCompleted(id)} className=''>
          ✅
        </button>
      ) : (
        <button onClick={() => toggleCompleted(id)} className=''>
          ❌
        </button>
      )}
      <div className='break-all'>{title}</div>
      <button onClick={() => removeTodo(id)} className='btn btn-xs'>
        delete
      </button>
    </div>
  );
};

export default TodoComponent;
