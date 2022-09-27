import './App.css';

import React from 'react';
import CommonLayout from '@src/common/components/common-layout';

console.log(import.meta.env);

function App() {
  return (
    <div className="App">
      <CommonLayout />
    </div>
  );
}

export default App;
