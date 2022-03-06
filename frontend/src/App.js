import React from 'react';
import Routes from './routes';
import { NameContextProvider } from './utils/context/NameContext'

function App() {
  return (
    <div >
        <Routes />
        <NameContextProvider children={<App />}/>
    </div>
  );
}
export default App;