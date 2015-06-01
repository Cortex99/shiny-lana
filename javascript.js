Crafty.init(500,300, document.getElementById('game'));

Crafty.e('Floor, 2D, Canvas, Color')
  .attr({x: 0, y: 250, w: 200, h: 10})
  .color('green');

Crafty.e('SecondFloor, 2D, Canvas, Color')
  .attr({x: 250, y: 230, w: 200, h: 10})
  .color('red')

Crafty.background('#FFFFFF url(http://samenvattingleren.nl/img/img2.jpg) no-repeat center center');

Crafty.e('2D, Canvas, Color, Fourway, Gravity')
  .attr({x: 25, y: 5, w: 50, h: 50})
  .color('orange')
  .fourway(4)
  .gravity("Floor")
  .bind('KeyDown', function(e) {
    if(e.key == Crafty.keys.LEFT_ARROW) {
      this.x = this.x - 1;
    } else if (e.key == Crafty.keys.RIGHT_ARROW) {
          this.x = this.x + 1;
    } else if (e.key == Crafty.keys.UP_ARROW) {
      this.y = this.y - 1;
    } else if (e.key == Crafty.keys.DOWN_ARROW) {
      this.y = this.y + 1;
    } else if (e.key == Crafty.keys.ESC) {
        this.x = 0;
    }
  })

