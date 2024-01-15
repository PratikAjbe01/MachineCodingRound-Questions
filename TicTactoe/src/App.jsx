// App.js
import React, { useState } from 'react';
import Cube from './Components/Cube';
import './App.css';

function App() {
  const [turn, setTurn] = useState('X');
  const [board, setBoard] = useState(Array(9).fill(''));
  const [winner, setWinner] = useState(null);
  const [gameOver, setGameOver] = useState(false);

  
  const checkWinner = () => {
    const winConditions = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8],  // Rows
      [0, 3, 6], [1, 4, 7], [2, 5, 8],  // Columns
      [0, 4, 8], [2, 4, 6],             // Diagonals
    ];
  
    for (const condition of winConditions) {
      const [a, b, c] = condition;
      if (board[a] && board[a] === board[b] && board[b] === board[c]) {
        setGameOver(true);
        setWinner(board[a]);
       
        return;
      }
    }
  
    // Check for a tie
    if (!board.includes('')) {
      setWinner('Tie');
      setGameOver(true);
      return;
    }
  };
  
  const changeClick = (n) => {
    if (gameOver || board[n] !== '') {
      return;
    }

    const newBoard = [...board];
    newBoard[n] = turn;
    setBoard(newBoard);
    setTurn(turn === 'X' ? 'O' : 'X');

    checkWinner();
  };

  const resetGame = () => {
    setBoard(Array(9).fill(''));
    setWinner(null);
    setGameOver(false);
    setTurn('X');
  };

  return (
    <div className='game'>
      <h2>It's {turn}'s turn</h2>
      {winner && <h1>{winner === 'Tie' ? 'It\'s a Tie!' : `Player ${winner} wins!`}</h1>}
      <button onClick={resetGame}>New Game</button>
      <div className='matrix'>
        {board.map((value, index) => (
          <Cube key={index} ind={index} onPlay={changeClick} value={value} />
        ))}
      </div>
    </div>
  );
}

export default App;
