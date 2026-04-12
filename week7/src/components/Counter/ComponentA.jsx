import React from 'react';
import { useRecoilValue } from 'recoil';
import { counterAtom } from '../../recoil/counterAtom.jsx';

export default function ComponentA() {
  const count = useRecoilValue(counterAtom);
  
  return (
    <div className="card component-a">
      <h3>Component A</h3>
      <p>Current Count: <span className="highlight count-val">{count}</span></p>
    </div>
  );
}
