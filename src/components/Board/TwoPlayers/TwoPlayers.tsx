import React, { useEffect, useState } from 'react';
import { verifyWinner } from '../verifiedWinner';
import Board from '../Board';
import { NewBoard, initialBoard } from '../../../models';
export interface TwoPlayersInterface {}



const TwoPlayers : React.FC<TwoPlayersInterface> = () => {
	const [board, setBoard] = useState<NewBoard>(initialBoard)
	const winner= verifyWinner(board);
	
	useEffect(() => {
			if(winner){
				alert(`El ganador es el jugador numero #${winner}`)
			}
			
	}, [board.xIsNext])
	
	const handleClick = (event: React.MouseEvent<HTMLElement>) => {
		const id = event.currentTarget.id;
		
		if(!winner){
			if (board[id as keyof NewBoard]) {
				alert("No puedes cambiar de marcador")
			}
			else {
				setBoard({ ...board, [id]: board.xIsNext ? "x" : "o" ,xIsNext:!board.xIsNext, move:board.move+1 })
			}	
		}
		
	};

	

	const resetGame = () => {
		setBoard(initialBoard);
	}
	



	return <div><Board board={board} resetGame={resetGame} handleClick={handleClick}/></div>;
};

export default TwoPlayers;
