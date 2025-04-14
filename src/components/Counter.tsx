import { useState, useEffect } from 'react';
import { counterStore } from '../stores/CounterStore';
import { CounterActions } from '../actions/CounterActions';

export const Counter = () => {
  const [count, setCount] = useState(counterStore.getCount());

  useEffect(() => {
    const updateCount = () => setCount(counterStore.getCount());
    counterStore.addChangeListener(updateCount);
    return () => counterStore.removeChangeListener(updateCount);
  }, []);

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => CounterActions.increment()}>Increase</button>
      <button onClick={() => CounterActions.decrement()}>Decrease</button>
      <button onClick={() => CounterActions.reset()}>Reset</button>
    </div>
  );
};
