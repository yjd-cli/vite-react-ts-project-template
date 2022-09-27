import ViteReactShowArea from '@src/common/components/vite-react-show-area/ViteReactShowArea';
import React, { useEffect, useState } from 'react';
import { RootDispatch, RootState } from '@src/store';
import { useSelector, useDispatch } from 'react-redux';
import { Link, Outlet } from 'react-router-dom';

const HomeContainer = () => {
  const [count, setCount] = useState(0);

  const countState = useSelector((state: RootState) => state.global.count);
  console.log(countState);

  const dispatch = useDispatch<RootDispatch>();

  useEffect(() => {
    dispatch.global.incrementAsync(1);
  }, []);

  return (
    <div>
      <h2>HomeContainer</h2>
      <ViteReactShowArea />
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
      </div>

      <div>
        <div>
          <Link to="/register">To Register</Link>
        </div>
        <div>
          <Link to="/login">To Login</Link>
        </div>
      </div>
    </div>
  );
};
export default HomeContainer;
