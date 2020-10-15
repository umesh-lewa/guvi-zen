import React, { useState } from 'react';
import { calculateWinner } from '../helpers';
import Board from './Board';

const styles = {
    width: '200px',
    margin: '20px auto',
};

const Game = () => {

    const [board, setBoard] = useState(Array(9).fill(null));
    const [xIsNext, setXisNext] = useState(true);
    const winner = calculateWinner(board);

    const handleClick = i => {

        const boardCopy = [...board];

        if (winner || boardCopy[i]) return;

        boardCopy[i] = xIsNext ? '⛌' : 'O';

        setBoard(boardCopy);
        setXisNext(!xIsNext);
    }

    const resetGame = () => (
        <button onClick={() => setBoard(Array(9).fill(null))}>
            Reset Game
        </button>
    )

    return (
        <div>
            <Board squares={board} onClick={handleClick} />
            <div style={styles}>
                <p>{winner ? 'Winner: ' + winner : 'Next Key: ' + (xIsNext ? '⛌' : 'O')}</p>
                {resetGame()}
            </div>
        </div>
    )
}

export default Game;