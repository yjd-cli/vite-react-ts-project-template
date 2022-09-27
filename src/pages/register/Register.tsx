import ViteReactShowArea from '@src/common/components/vite-react-show-area/ViteReactShowArea';
import React, { useEffect } from 'react';
import { RootDispatch, RootState } from '@src/store';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

function RegisterContainer() {
  const countState = useSelector((state: RootState) => state.global.count);
  console.log(countState);

  const dispatch = useDispatch<RootDispatch>();

  useEffect(() => {
    dispatch.global.incrementAsync(1);
  }, []);

  return (
    <div>
      <h2>RegisterContainer</h2>
      <ViteReactShowArea />
      <div>
        <div>
          <Link to="/home">To Home</Link>
        </div>
        <div>
          <Link to="/login">To Login</Link>
        </div>
        <div>
          <Link to="/user">To User</Link>
        </div>
      </div>
    </div>
  );
}

export default RegisterContainer;
