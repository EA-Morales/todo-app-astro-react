import React from 'react';

import useCounter from '../components/useCounter';

const Button = (): React.JSX.Element => {
  const { increment, count } = useCounter();

  return (
    <>
      <p>Count: {count}</p>
      <button onClick={() => increment()}>Click</button>;
    </>
  );
};

export default Button;
