import React from 'react';
import { useRecoilState, useResetRecoilState } from 'recoil';
import { counterAtom } from '../../recoil/counterAtom.jsx';

export default function ComponentB() {
  const [count, setCount] = useRecoilState(counterAtom);
  const resetCount = useResetRecoilState(counterAtom);

  const handleDecrease = () => {
    const newValue = count - 1;
    setCount(newValue);
    console.log("Decrease:", newValue);
  };

  const handleIncrease = () => {
    const newValue = count + 1;
    setCount(newValue);
    console.log("Increase:", newValue);
  };

  return (
    <div className="card component-b">
      <h3>Component B</h3>
      <div className="button-group">
        <button className="btn decrease" onClick={handleDecrease}>- Decrease</button>
        <button className="btn reset" onClick={resetCount}>Reset</button>
        <button className="btn increase" onClick={handleIncrease}>+ Increase</button>
      </div>
    </div>
  );
}
