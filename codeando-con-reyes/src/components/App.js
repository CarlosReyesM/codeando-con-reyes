import React from 'react';
import './App.css';

function App() {
  // coments

  // string literal

  // arrow functions

  // for loops

  const arrowFuction = valor => {
    console.log(valor);
  };

  const people = ['Carlos', 'Juanito', 'Fran', 'Paco', 'Jose', 'Raul'];

  for (let i = 0; i < people.length; i++) {
    arrowFuction(`uno ${people[i]}`);
  }

  for (const p in people) {
    arrowFuction(`dos ${people[p]}`);
  }

  people.forEach(p => arrowFuction(`tres ${p}`));

  // while loops
  let i = 0;
  while (i < people.length) {
    arrowFuction(`cuatro ${people[i]}`);
    i++;
  }

  // do while

  let p = 0;
  do {
    arrowFuction(`cinco ${people[p]}`);
    p++;
  } while (p < people.length);

  return <div className="App"></div>;
}

export default App;
