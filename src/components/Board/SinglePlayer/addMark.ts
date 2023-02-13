import { NewBoard } from "./../../../models/Board";

export const addMark = (board: NewBoard): NewBoard => {
  const newMove = board;

  const case0 = [
    board.shell1,
    board.shell2,
    board.shell3,
    board.shell4,
    board.shell6,
    board.shell7,
    board.shell8,
    board.shell9,
  ];

  if (newMove.move === 1) {
    newMove.xIsNext = true;
    newMove.move++;
    if (case0.includes("x")) {
      newMove.shell5 = "o";
      return newMove;
    } else {
      newMove.shell2 = "o";
      return newMove;
    }
  }
  if (newMove.move === 3) {
    newMove.xIsNext = true;
    newMove.move++;
  }

  return newMove;
};
