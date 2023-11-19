import type React from 'react';

const Button = (): React.JSX.Element => {
  return <button onClick={() => console.log('Click')}>Click</button>;
};

export default Button;
