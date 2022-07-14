import React, {useEffect} from 'react';
import TicTacToe from './TicTacToe';
import './App.css';

function App() {
  useEffect(() => {
    document.title = "Tic-Tac-Toe";
  });
  return (
    <div className="App">
      <TicTacToe/>
    </div>
  );
}

export default App;
