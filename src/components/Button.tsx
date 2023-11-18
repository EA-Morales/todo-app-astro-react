import React from 'react';

console.log('Button');

const Button: React.FC = () => {
  return <button onClick={() => console.log('Click')}>Click</button>;
};

export default Button;
