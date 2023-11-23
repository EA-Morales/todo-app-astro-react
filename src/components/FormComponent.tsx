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
      <form onSubmit={handleSubmit} action=''>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          type='text'
        />
        <button>Submit</button>
      </form>
    </>
  );
};

export default FormComponent;
