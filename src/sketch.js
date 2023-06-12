function sketch(p) {

  // let W;
  let gridPoints = [];

  let ballX, ballY;
  let ballX2, ballY2;
  let ballX3, ballY3;
  let ballX4, ballY4;
  let rectX, rectY, rectW, rectH;
  let angle = p.random(p.TWO_PI);
  let angle2 = p.random(p.TWO_PI);
  let angle3 = p.random(p.TWO_PI);
  let angle4 = p.random(p.TWO_PI);
  let r = 10;
  let xspeed = p.random(.5,2);
  let yspeed = p.random(.5,2);
  let xspeed2 = p.random(.5,2);
  let yspeed2 = p.random(.5,2);
  let xspeed3 = p.random(.5,2);
  let yspeed3 = p.random(.5,2);
  let xspeed4 = p.random(.5,2);
  let yspeed4 = p.random(.5,2);

  p.setup = function() {
    p.createCanvas(p.windowWidth, p.windowHeight)
    p.defineGrid()
    rectX = p.width*.01;
    rectY = p.height*.01;
    rectW = p.width*.99;
    rectH = p.height*.99;
    ballX = p.random(rectX,rectW);
    ballY = p.random(rectY,rectH);
    ballX2 = p.random(rectX,rectW);
    ballY2 = p.random(rectY,rectH);
    ballX3 = p.random(rectX,rectW);
    ballY3 = p.random(rectY,rectH);
    ballX4 = p.random(rectX,rectW);
    ballY4 = p.random(rectY,rectH);
    // W = p.width;
    // console.log(gridPoints)
    console.log('Hello');
  }

  p.draw = function() {
    p.background(255);
    p.bouncingBall();
    p.bouncingBall2();
    p.bouncingBall3();
    p.bouncingBall4();
    p.grid();
  }

  p.windowResized = function() {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
    p.defineGrid()
    rectX = p.width*.01;
    rectY = p.height*.01;
    rectW = p.width*.99;
    rectH = p.height*.99;
    // W = p.width;
  }

  p.defineGrid = function() {
    let size = 5;
    let colSize = 3*size;
    let numCols = p.floor(p.windowWidth/colSize);
    let numRows = p.floor(p.windowHeight/colSize);
    let highlight = p.color(255, 132, 0);
    // let baseCol = p.color(125, 125, 125);
    let baseCol = p.color(242, 85, 101);
    for (let i = 0; i < numCols; i++) {
      let x = i * colSize + colSize/2;
      // console.log(x)
      // p.stroke(255)
      // p.line(x,0,x,p.windowHeight)
      for (let j = 0; j < numRows; j++) {
        let y = j * colSize + colSize/2;
        gridPoints.push(new p.GridPoint(p, x, y, baseCol, highlight))
        // console.log(x,y)
        //gridPoints.push([x,y])
      }
    }
  }

  p.bouncingBall = function() {
    //p.fill(255,132,0);
    p.noFill()
    p.noStroke();
    p.ellipse(ballX, ballY, r);
    ballX += xspeed;
    ballY += yspeed;
    angle += p.radians(3);
    if (ballX > rectW || ballX < rectX) {
      xspeed = -xspeed;
    }
    if (ballY > rectH || ballY < rectY) {
      yspeed = -yspeed;
    }
    return {ballX, ballY};
  }

  p.bouncingBall2 = function() {
    //p.fill(255,132,0);
    p.noFill()
    p.noStroke();
    p.ellipse(ballX2, ballY2, r);
    ballX2 += xspeed2;
    ballY2 += yspeed2;
    angle2 += p.radians(3);
    if (ballX2 > rectW || ballX2 < rectX) {
      xspeed2 = -xspeed2;
    }
    if (ballY2 > rectH || ballY2 < rectY) {
      yspeed2 = -yspeed2;
    }
    return {ballX2, ballY2};
  }

  p.bouncingBall3 = function() {
    //p.fill(255,132,0);
    p.noFill()
    p.noStroke();
    p.ellipse(ballX3, ballY3, r);
    ballX3 += xspeed3;
    ballY3 += yspeed3;
    angle3 += p.radians(3);
    if (ballX3 > rectW || ballX3 < rectX) {
      xspeed3 = -xspeed3;
    }
    if (ballY3 > rectH || ballY3 < rectY) {
      yspeed3 = -yspeed3;
    }
    return {ballX3, ballY3};
  }

  p.bouncingBall4 = function() {
    //p.fill(255,132,0);
    p.noFill()
    p.noStroke();
    p.ellipse(ballX4, ballY4, r);
    ballX4 += xspeed4;
    ballY4 += yspeed4;
    angle4 += p.radians(3);
    if (ballX4 > rectW || ballX4 < rectX) {
      xspeed4 = -xspeed4;
    }
    if (ballY4 > rectH || ballY4 < rectY) {
      yspeed4 = -yspeed4;
    }
    return {ballX4, ballY4};
  }

  // p.grid = function(ballX, ballY) {
  //   for (let i = 0; i < gridPoints.length; i++) {
  //     // gridPoints[i].run()
  //     let x = gridPoints[i][0];
  //     let y = gridPoints[i][1];
  //     let fromMouse = p.dist(p.mouseX,p.mouseY,x,y)
  //     let size = 1.75;
  //     let sizeAdj = fromMouse < 150 ? p.map(fromMouse,150,0,1.75,.5) : 1.75;
  //     //p.rectMode(p.CENTER)
  //     let highlight = p.color(255, 132, 0);
  //     let baseCol = p.color(125, 125, 125);
  //     let fromDot = p.dist(x,y,ballX,ballY);
  //     //console.log(fromDot)
  //     let limit = 150;
  //     let lerpVal = fromDot < limit ? 0 : p.map(fromDot,limit,0,0,1);
  //     let col = p.lerpColor(baseCol,highlight,lerpVal);
  //     p.fill(col)
  //     p.noStroke()
  //     p.rect(x,y,size*sizeAdj,size*sizeAdj);
  //     // p.stroke(255);
  //     // p.strokeWeight(sizeAdj)
  //     // p.line(x,0,x,p.windowHeight)
  //   }
  // }

  p.grid = function() {
    for(let i = 0; i < gridPoints.length; i++) {
      gridPoints[i].run()
    }
  }

  p.GridPoint = class {

    constructor(instance,x,y,col1,col2) {
      this.p = instance
      this.x = x;
      this.y = y;
      this.size = 1.75;
      this.baseCol = col1;
      this.highlight = col2;
      this.col = col1;
    }
  
    show() {
      this.p.rectMode(p.CENTER);
      this.p.noStroke();
      this.p.fill(this.col);
      this.p.rect(this.x,this.y,this.size);
    }
  
    update() {
      // let fromMouse = this.p.dist(this.p.mouseX,this.p.mouseY,this.x,this.y);
      // let sizeMult = fromMouse < 100 ? this.p.map(fromMouse,100,0,1,3) : 1;

      let fromMouse = p.dist(p.mouseX,p.mouseY,this.x,this.y)
      let fromBall = p.dist(ballX,ballY,this.x,this.y)
      let fromBall2 = p.dist(ballX2,ballY2,this.x,this.y)
      let fromBall3 = p.dist(ballX3,ballY3,this.x,this.y)
      let fromBall4 = p.dist(ballX4,ballY4,this.x,this.y)

      // let limit1 = p.width/7;
      let limit1 = 250
      let limit2 = 350
      let ballAdj = fromBall < limit1 ?  this.p.map(fromBall,limit1,0,1,2.5) : 1;
      let ballAdj2 = fromBall2 < limit1 ?  this.p.map(fromBall2,limit1,0,1,2.5) : 1;
      let ballAdj3 = fromBall3 < limit2 ?  this.p.map(fromBall3,limit2,0,1,2.5) : 1;
      let ballAdj4 = fromBall4 < limit2 ?  this.p.map(fromBall4,limit2,0,1,2.5) : 1;

      let totalAdj = (ballAdj * ballAdj2 * ballAdj3 * ballAdj4) > 3.4 ? 3.4 : ballAdj * ballAdj2 * ballAdj3 * ballAdj4;
      // let sizeAdj = fromMouse < 150 ? this.p.map(fromMouse,150,0,0,-.125) : 0;

      // let fromDot = p.dist(this.x,this.y,ballX,ballY);
      // let limit = p.width/10;
      let limit = 150;
      // let lerpVal = fromMouse < limit ? 0 : p.map(fromMouse,limit,0,0,1);
      // this.col = p.lerpColor(this.baseCol,this.highlight,lerpVal);

      this.size = fromMouse < limit ? this.p.map(fromMouse,limit,0,2.6,.5) * totalAdj : 2.6 * totalAdj;
    }
  
    run() {
      this.update();
      this.show();
    }

    showSize() {
      console.log(this.size)
    }
  }

}

export default sketch;
