export class Board {
  num_rows: number;
  num_cols: number;
  
  position: [];

  constructor(num_rows: number, num_cols: number) {
    this.num_rows = num_rows;
    this.num_cols = num_cols;
  }
}

//let board = new Board(3,4);
//console.log(board);
//console.log(board.num_cols);
