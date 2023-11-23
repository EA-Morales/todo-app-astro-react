import React, { useState } from 'react';
import useTodosHook from './useTodosHook';

const FormComponent = () => {
  const { addTodo } = useTodosHook();
  const [input, setInput] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    addTodo({ id: Date.now(), title: input, completed: false });

    setInput('');
  };

  return (
    <>
      <form
        className='flex justify-center gap-2'
        onSubmit={handleSubmit}
        action=''
      >
        <input
          className='input input-bordered input-xs'
          value={input}
          onChange={(e) => setInput(e.target.value)}
          type='text'
        />
        <button className='btn btn-xs'>Submit</button>
      </form>
    </>
  );
};

export default FormComponent;
