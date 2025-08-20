import React, { useEffect } from 'react';
import { apiFetch } from './api/apiClient';

function App() {
  useEffect(() => {
    apiFetch('http://20.244.56.144/api/products')
      .then(data => {
        console.log(data);
      });
  }, []);

  return <div>My App</div>;
}

export default App;
