import { NewBoard } from "./../../models/Board";

export const verifyWinner = (board: NewBoard): string => {
  const case1 = [board.shell1, board.shell2, board.shell3];
  const case2 = [board.shell4, board.shell5, board.shell6];
  const case3 = [board.shell7, board.shell8, board.shell9];
  const case4 = [board.shell1, board.shell4, board.shell7];
  const case5 = [board.shell2, board.shell5, board.shell8];
  const case6 = [board.shell3, board.shell6, board.shell9];
  const case7 = [board.shell1, board.shell5, board.shell9];
  const case8 = [board.shell3, board.shell5, board.shell7];

  const allCases = [case1, case2, case3, case4, case5, case6, case7, case8];

  for (const array of allCases) {
    if (array.every((element) => element === "x")) {
      return "1";
    } else if (array.every((element) => element === "o")) {
      return "2";
    }
  }
  return "";
};
