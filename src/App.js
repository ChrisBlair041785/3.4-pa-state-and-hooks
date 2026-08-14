import React, { useState } from 'react';
import './App.css';
import Button from './Button';
import TextField from './TextField';
import TodoList from './TodoList';

function App() {
  
  const [count, setCount] = useState(0); 
  const handleIncrement = () => {
    setCount(count + 1); 
  }; 
  const handleDecrement = () => {
    setCount(count - 1);
  };
  const handleReset = () => {
    setCount(0);
  };

  const [inputValue, setInputValue] = useState('');
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  }; 


  return (
    <div className="App">
      <header className="App-header">
        <h1>Counter: {count}</h1>
        <Button label="Increment" onClick={handleIncrement}>Increment</Button>
        <Button label="Decrement" onClick={handleDecrement}>Decrement</Button>
        <Button label="Reset" onClick={handleReset}>Reset</Button>
        <h1>Text Field Value: {inputValue}</h1>
        <TextField value={inputValue} onChange={handleInputChange} />
        <h1>Todo List:</h1>
        <TodoList />
      </header>
    </div>
  );
}

export default App;
