import logo from './logo.svg';
import './App.css';
import RickAndMorty from './RickAndMorty';
import PracticalExample from './PracticalExample';
import PreLoader from './PreLoader';
import { useEffect, useState } from 'react';

function App() {

  const [loader,setloader] = useState(true);
  setInterval(() => {
        setloader(false)
  }, 4000);

  return (
    <>
      {/* <RickAndMorty /> */}
      {/* <PreLoader/> */}
      {/* <PracticalExample/> */}

      {/* Method Loader */}
      {
          loader ? <PreLoader/> : <PracticalExample/>
      }
    </>
  );
}

export default App;
