import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
   fetch('https://api.openbrewerydb.org/v1/breweries')
   .then(response => response.json())
   .then(json => {
    console.log(json);
   })
 
  }, []);

  return (
    <div>
      {/* Seu conteúdo JSX aqui */}
    </div>
  );
}
