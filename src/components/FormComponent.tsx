import React, { useState } from 'react';
import useTodosHook from './useTodosHook';

const FormComponent = () => {
  const { addTodo } = useTodosHook();
  const [input, setInput] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!input || input.trim().length === 0) {
      alert('Input cannot be empty');
      return;
    }

    addTodo({ id: Date.now(), title: input, completed: false });

    setInput('');
  };

  return (
    <>
      <form
        className='mb-9 flex justify-center gap-2'
        onSubmit={handleSubmit}
        action=''
      >
        <input
          className='input input-bordered input-xs w-full max-w-xs'
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
