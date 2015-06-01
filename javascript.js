var drawScene1 = function() {
    // Scene 1
    background(235, 247, 255);
    fill(0, 85, 255);
    textSize(39);
    text("The Story of Winston", 10, height/2);
};

var drawScene2 = function() {
    background(173, 239, 255);
    fill(7, 14, 145);
    text("Lil Winston is born!", 10, 100);
    image(getImage("creatures/BabyWinston"), width/2, height/2);
};

mouseClicked = function() {
    drawScene2();
};

drawScene1();
//drawScene2();
