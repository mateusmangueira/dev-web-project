import React, { useState } from 'react';

const NameContext = React.createContext();

function NameContextProvider ({children}) {

  const [name, setName] = useState("");

  return (
    <NameContext.Provider value={{"name": name, "setName": setName}}>
      {children}
    </NameContext.Provider>
  );

}

export  { NameContextProvider, NameContext };