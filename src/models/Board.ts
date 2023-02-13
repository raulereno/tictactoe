export interface NewBoard {
  shell1: string;
  shell2: string;
  shell3: string;
  shell4: string;
  shell5: string;
  shell6: string;
  shell7: string;
  shell8: string;
  shell9: string;
  xIsNext: boolean;
  move: number;
}
export const initialBoard: NewBoard = {
  shell1: "",
  shell2: "",
  shell3: "",
  shell4: "",
  shell5: "",
  shell6: "",
  shell7: "",
  shell8: "",
  shell9: "",
  xIsNext: true,
  move: 0,
};
