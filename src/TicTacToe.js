import React, { useState } from "react";
import Square from "./Square";
import EndGame from "./EndGame";

const INITIAL = "";
const X_PLAYER = "X";
const O_PLAYER = "O";
const winCombination = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

function TicTacToe() {
  const [grid, setGrid] = useState(Array(9).fill(INITIAL));
  const [player, setPlayer] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [draw, setDraw] = useState(false);
  const [winCount, setWinCount] = useState({ X: 0, O: 0 });

  function isGameOver() {
    if (!gameOver) {
      //X win check
      for (let i = 0; i < 8; i++) {
        if (
          grid[winCombination[i][0]] === X_PLAYER &&
          grid[winCombination[i][1]] === X_PLAYER &&
          grid[winCombination[i][2]] === X_PLAYER
        ) {
          setGameOver(true);
          setWinCount({ ...winCount, X: winCount.X + 1 });
          console.log("X won");
          return;
        }
      }
      //O win check
      for (let i = 0; i < 8; i++) {
        if (
          grid[winCombination[i][0]] === O_PLAYER &&
          grid[winCombination[i][1]] === O_PLAYER &&
          grid[winCombination[i][2]] === O_PLAYER
        ) {
          setGameOver(true);
          setWinCount({ ...winCount, O: winCount.O + 1 });
          console.log("O won");
          return;
        }
      }
    }
    if (!gameOver && !grid.includes(INITIAL)) {
      console.log("match draw");
      setDraw(true);
      setGameOver(true);
    }
  }
  function restartGame() {
    setGrid(Array(9).fill(INITIAL));
    setGameOver(false);
    setDraw(false);
  }

  function clearHistory() {
    setWinCount({ X: 0, O: 0 });
    restartGame();
  }

  isGameOver();

  function handleClick(id) {
    setGrid(
      grid.map((item, index) => {
        if (index === id) {
          if (player) {
            return X_PLAYER;
          } else {
            return O_PLAYER;
          }
        } else {
          return item;
        }
      })
    );
    setPlayer(!player);
  }

  return (
    <div className="container">
      <div className="win-history">
        <span>X's wins: {winCount.X}</span>
        <br />
        <span>O's wins: {winCount.O}</span>
        <br />
        <span>{player ? "X's Turn" : "O's Turn"}</span>
      </div>

      {gameOver && (
        <EndGame
          winCount={winCount}
          restartGame={restartGame}
          clearHistory={clearHistory}
          player={player}
          draw={draw}
        />
      )}
      <Square clickedArray={grid} handleClick={handleClick} />
      <button className="reset-btn" onClick={restartGame}>
        RESET GAME
      </button>
    </div>
  );
}

export default TicTacToe;
