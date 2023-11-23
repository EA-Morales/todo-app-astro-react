import useTodosHook from '../components/useTodosHook';

export interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

const TodoComponent = ({ id, title, completed }: Todo) => {
  const { toggleCompleted, removeTodo } = useTodosHook();

  return (
    <div className='flex gap-4' key={id}>
      {completed ? (
        <button onClick={() => toggleCompleted(id)} className='text-green-500'>
          ✅
        </button>
      ) : (
        <button onClick={() => toggleCompleted(id)} className='text-red-500'>
          ❌
        </button>
      )}
      <div>{title}</div>
      <button onClick={() => removeTodo(id)} className='btn btn-xs'>
        delete
      </button>
    </div>
  );
};

export default TodoComponent;
