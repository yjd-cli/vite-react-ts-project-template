import './App.css';

import React, { useEffect } from 'react';
import { Outlet } from 'react-router';

console.log(import.meta.env);

function App() {
  useEffect(() => {
    console.log('App 挂载');
    return () => {
      console.log('App 卸载');
    };
  }, []);

  return (
    <div className="App">
      <Outlet />
    </div>
  );
}

export default App;
