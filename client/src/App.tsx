import './App.css';
import { useEffect, useState } from 'react';

export const dataObj = {
  getData: () => null,
};

function App() {

  const [ data, setData ] = useState('Not connecting to server');

  dataObj.getData = async () => {
    const resp = await fetch('http://localhost:3000/');
    const result = await resp.json();

    setData(result);
  };

  useEffect(() => {
    dataObj.getData();
  }, []);

  return (
    <>
      <div className='text'>
        <h1>{ data.message }</h1>
      </div>
    </>
  );
}

export default App;
