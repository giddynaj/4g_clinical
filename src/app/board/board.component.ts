import { Component, OnInit } from '@angular/core';
import { Board } from '../board';
import { Robot } from '../robot';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
  facingIcon: string = '';
  location: string = '';

  constructor() { 
    this.x_positions = Array.apply(null, {length: 5}).map(Function.call, Number);
    this.y_positions = Array.apply(null, {length: 5}).map(Function.call, Number).reverse();
    this.board = new Board(5,5);
    this.robot = new Robot(this.board);
    this.facingIcon = this.getFacing(this.robot.facing);
  }

  onPlaceSubmit(event:any){
    var coord = event.target.value.split(' ');
    this.robot.place(parseInt(coord[0]), parseInt(coord[1]), coord[2])
    this.location = this.robot.pos_y + ':' + this.robot.pos_x;
    this.facingIcon = this.getFacing(this.robot.facing);
  }

  onMoveClick(){
    this.robot.move();
    this.location = this.robot.pos_y + ':' + this.robot.pos_x;
  }

  onRightClick(){
    this.robot.right();
    this.facingIcon = this.getFacing(this.robot.facing);
  }

  onLeftClick(){
    this.robot.left();
    this.facingIcon = this.getFacing(this.robot.facing);
  }

  onReportClick(){
    alert(this.robot.report());
  }

  ngOnInit() {
  }

  getFacing(direction:string) {
    if (direction == 'NORTH') { 
      return '^';
    } else if (direction == 'EAST') {
      return '>';
    } else if (direction == 'SOUTH') {
      return 'v';
    } else if (direction == 'WEST') {
      return '<';
    };
  }

}
