import React, { useState } from 'react';

export const Counter = () => {
  const [result, setResult] = useState(0);

  const changeResult = (delta: number) => {
    setResult(prev => prev + delta);
  };

  return (
    <div>
      <button onClick={() => changeResult(1)}>Add</button>
      <div role='result'>{result}</div>
      <button onClick={() => changeResult(-1)}>Remove</button>
    </div>
  );
};
