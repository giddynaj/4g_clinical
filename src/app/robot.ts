import { Board } from './board';

const compass = ['NORTH', 'EAST', 'SOUTH', 'WEST'];

export class Robot {
  pos_x: number = -1;
  pos_y: number = -1;
  facing: string = 'NORTH';
  board: Board;
  is_on_board: boolean = false;
  
  constructor(board: Board) {
    this.board = board;
  }

  place(x, y, f) {
    this.is_on_board = true;
    this.position(x, y, f);
  }

  move() {
    let x = this.pos_x;
    let y = this.pos_y;
    let f = this.facing;

    if (f == 'NORTH') {
      this.position(x, y+1, f);
    } else if (f == 'SOUTH') {
      this.position(x, y-1, f);
    } else if (f == 'EAST' ) {
      this.position(x+1, y, f);
    } else if (f == 'WEST' ) {
      this.position(x-1, y, f);
    }
  }

  left() {
    if (this.is_on_board) {
      this.rotate('LEFT');
    }
  }
  
  right() {
    if (this.is_on_board) {
      this.rotate('RIGHT');
    }
  }

  report() {
    var out = '';

    if (this.is_on_board) {
      out = "X: " + this.pos_x +
            " Y: " + this.pos_y +
            " F: " + this.facing;
    }
    return out;
  }

  rotate(direction) {
    let f = this.facing;
    if (direction == 'LEFT') {
      var new_idx = (compass.indexOf(f) + 3) % 4;
      this.facing = compass[new_idx];
    } else if (direction == 'RIGHT') {
      var new_idx = (compass.indexOf(f) + 1) % 4;
      this.facing = compass[new_idx];
    }
  }

  position(x, y, f) {
    if (this.is_valid_coordinates(x, y)) {
      this.pos_x = x;
      this.pos_y = y;
      this.facing = f;
    }
  }

  is_valid_coordinates(new_x, new_y) {
    if (this.is_on_board) {
      if ((new_x >= 0) && (new_x < this.board.num_cols)) {
        
        if ((new_y >= 0) && (new_y < this.board.num_rows)) {
          return true;
        }
      }
    }
    return false;
  }
}

//Test Data
if (typeof require != 'undefined' && require.main==module) {
  var board = new Board(5, 5); 
  let walle = new Robot(board);

  walle.move;
  console.log(walle.report());
  walle.move;
  console.log(walle.report());

  console.log(walle.report());
  walle.place(5, 5, 'NORTH')
  console.log(walle.report());
  walle.place(3, 4, 'NORTH')
  console.log(walle.report());

  walle.place(0,0,'NORTH');
  console.log(walle.report());

  for (var i in [1,2,3,4]) {
    for (var j in [1,2,3,4,5]) {
      walle.move();
      console.log(walle.report());
    }
    walle.right()
    console.log(walle.report());
  }
}
