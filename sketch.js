var movR, fixR;
var edges;

function setup() {
    createCanvas(800, 400);
    fixR = createSprite(400, 200, 40, 80);
    fixR.debug = true;

    movR = createSprite(400, 50, 40, 40);
    //movR.velocityX = -3;
    movR.velocityY = 3;
    movR.debug = true;


    edges = createEdgeSprites();


}

function draw() {
    background(0);

    //movR.x = mouseX;
    //movR.y = mouseY;

    console.log(movR.x - fixR.x);



    if (movR.x - fixR.x < movR.width / 2 + fixR.width / 2 &&
        fixR.x - movR.x < movR.width / 2 + fixR.width / 2 &&
        movR.y - fixR.y < movR.height / 2 + fixR.height / 2 &&
        fixR.y - movR.y < movR.height / 2 + fixR.width / 2) {

        movR.shapeColor = "lime";
        fixR.shapeColor = "lime";

        //movR.velocityX = -(movR.velocityX)
        movR.velocityY = -(movR.velocityY)






    } else {
        movR.shapeColor = "red";
        fixR.shapeColor = "red";
    }
    movR.bounceOff(edges[0]);
    movR.bounceOff(edges[1]);
    movR.bounceOff(edges[2]);
    movR.bounceOff(edges[3]);

    drawSprites();
}