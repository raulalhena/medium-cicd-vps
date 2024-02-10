import './App.css';
import { useEffect, useState } from 'react';

interface Message {
  message: string;
}

export const dataObj = {
  getData: (): Promise<Message> => { 
    return Promise.resolve({ message: 'Not connected to server' }); 
  },
};

function App() {

  const [ data, setData ] = useState({ message: 'Not connected to server' });

  dataObj.getData = async (): Promise<Message> => {
    const resp = await fetch('http://localhost:3000/');
    const result: Message = await resp.json();

    setData(result);
    return result;
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
