import './App.css';
import { useEffect, useState } from 'react';

function App() {

  const [ data, setData ] = useState('Not connecting to server');

  const getData = async () => {
    const resp = await fetch('http://localhost:3000/');
    const result = await resp.json();

    setData(result);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div className='text'>
        <h1>CI/CD pipeline working in VPS!</h1>
      </div>
    </>
  );
}

export default App;
