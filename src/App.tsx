import React from 'react';

const App: React.FC = () => {
  const func = () => {
    const b = '1';
    const a = '2';

    return a + b;
  };

  return (
    <div className="app">
      <div className="container">
        <div className="app__inner">
          <h1 className="flex  justify-center font-bold text-red-500 underline ">Hello world!</h1>
          <p className="h-32 font-bold text-red-400 underline">{func()}</p>
        </div>
      </div>
    </div>
  );
};

export default App;
