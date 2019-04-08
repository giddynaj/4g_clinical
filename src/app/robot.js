"use strict";
exports.__esModule = true;
var board_1 = require("./board");
var compass = ['NORTH', 'EAST', 'SOUTH', 'WEST'];
var Robot = /** @class */ (function () {
    function Robot(board) {
        this.pos_x = -1;
        this.pos_y = -1;
        this.facing = 'NORTH';
        this.is_on_board = false;
        this.board = board;
    }
    Robot.prototype.place = function (x, y, f) {
        this.is_on_board = true;
        this.position(x, y, f);
    };
    Robot.prototype.move = function () {
        var x = this.pos_x;
        var y = this.pos_y;
        var f = this.facing;
        if (f == 'NORTH') {
            this.position(x, y + 1, f);
        }
        else if (f == 'SOUTH') {
            this.position(x, y - 1, f);
        }
        else if (f == 'EAST') {
            this.position(x + 1, y, f);
        }
        else if (f == 'WEST') {
            this.position(x - 1, y, f);
        }
    };
    Robot.prototype.left = function () {
        if (this.is_on_board) {
            this.rotate('LEFT');
        }
    };
    Robot.prototype.right = function () {
        if (this.is_on_board) {
            this.rotate('RIGHT');
        }
    };
    Robot.prototype.report = function () {
        var out = '';
        if (this.is_on_board) {
            out = "X: " + this.pos_x +
                " Y: " + this.pos_y +
                " F: " + this.facing;
        }
        return out;
    };
    Robot.prototype.rotate = function (direction) {
        var f = this.facing;
        if (direction == 'LEFT') {
            var new_idx = (compass.indexOf(f) + 3) % 4;
            this.facing = compass[new_idx];
        }
        else if (direction == 'RIGHT') {
            var new_idx = (compass.indexOf(f) + 1) % 4;
            this.facing = compass[new_idx];
        }
    };
    Robot.prototype.position = function (x, y, f) {
        if (this.is_valid_coordinates(x, y)) {
            this.pos_x = x;
            this.pos_y = y;
            this.facing = f;
        }
    };
    Robot.prototype.is_valid_coordinates = function (new_x, new_y) {
        if (this.is_on_board) {
            if ((new_x >= 0) && (new_x < this.board.num_cols)) {
                if ((new_y >= 0) && (new_y < this.board.num_rows)) {
                    return true;
                }
            }
        }
        return false;
    };
    return Robot;
}());
exports.Robot = Robot;
//Test Data
if (typeof require != 'undefined' && require.main == module) {
    var board = new board_1.Board(5, 5);
    var walle = new Robot(board);
    walle.move;
    console.log(walle.report());
    walle.move;
    console.log(walle.report());
    console.log(walle.report());
    walle.place(5, 5, 'NORTH');
    console.log(walle.report());
    walle.place(3, 4, 'NORTH');
    console.log(walle.report());
    walle.place(0, 0, 'NORTH');
    console.log(walle.report());
    for (var i in [1, 2, 3, 4]) {
        for (var j in [1, 2, 3, 4, 5]) {
            walle.move();
            console.log(walle.report());
        }
        walle.right();
        console.log(walle.report());
    }
}
