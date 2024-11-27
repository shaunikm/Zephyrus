import React, { Suspense } from 'react';
import ThreeDScene from './ThreeDScene';

function App() {
  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <Suspense fallback={<div>Loading...</div>}>
        <ThreeDScene />
      </Suspense>
    </div>
  );
}

export default App;
