import React from "react";

function EndGame({ winCount, restartGame,clearHistory, player, draw }) {
  return (
    <div className="end-game-screen">
      {!draw && <span className="win-text">{player ? "O Won" : "X Won"}</span>}
      {draw && <span className="win-text">MATCH DRAWN</span>}
      <span className="win-history">
        X's wins: {winCount.X}
        <br />
        O's wins: {winCount.O}
      </span>
      <button className="btn" onClick={restartGame}>
        RESTART GAME
      </button>
      <button className="btn" onClick={clearHistory}>
        CLEAR HISTORY
      </button>
    </div>
  );
}

export default EndGame;
