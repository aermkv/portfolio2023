function sketch2(p) {

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

  let currentHue = 35;

  p.setup = function() {
    p.createCanvas(p.windowWidth, p.windowHeight)
    p.defineGrid()
    p.colorMode(p.HSB, 360, 100, 100, 1);
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
    //console.log('Hello');
  }

  p.draw = function() {
    p.background(255);
    p.bouncingBall();
    p.bouncingBall2();
    p.bouncingBall3();
    p.bouncingBall4();
    p.grid();

    // let bgS = 25;
    // let bgB = 95;
    // p.background(currentHue, bgS, bgB, 1);

    let t = p.millis() * 0.00005;
    let wave = (p.sin(t) + 1) / 2; 

    let hueMin = 140;
    let hueMax = 220;
    // currentHue = p.lerp(hueMin, hueMax, wave);
    // currentHue = (185)

    p.grid()
    console.log(p.frameRate())
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
    gridPoints = [];
    let size = 5;
    let colSize = 3*size;
    let numCols = p.floor(p.windowWidth/colSize);
    let numRows = p.floor(p.windowHeight/colSize);
    let highlight = p.color(255, 132, 0);
    // let baseCol = p.color(125, 125, 125);
    // let baseCol = p.color(242, 85, 101);
    let baseCol = p.color(165, 165, 165);
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

      // let dx = this.x - p.mouseX;
      // let dy = this.y - p.mouseY;
      // let d = p.dist(p.mouseX, p.mouseY, this.x, this.y);
      // if (d < 0.001) d = 0.001;

      // let maxOffset = 15;
      // let offsetMag = p.map(d, 0, p.windowHeight/2, maxOffset, 0, true);

      // let ox = (dx / d) * offsetMag;
      // let oy = (dy / d) * offsetMag;

      // let sx = this.x + ox;
      // let sy = this.y + oy;

      let shadowS = 3;
      let shadowB = 77; 
      let shadowA = 0.3;

      p.noStroke();
      // p.fill(p.color(currentHue, shadowS, shadowB, shadowA));
      // p.fill(p.color(currentHue, shadowS, shadowB, shadowA));
      // p.circle(sx, sy, this.size * 1.2);

      this.p.rectMode(p.CENTER);
      this.p.noStroke();
      this.p.fill(this.col);
      this.p.circle(this.x,this.y,this.size);
    }

    // showShadow() {
    //     const p = this.p;

    //     let dx = this.x - p.mouseX;
    //     let dy = this.y - p.mouseY;
    //     let d = p.dist(p.mouseX, p.mouseY, this.x, this.y)

    //     if (d < 0.001) d = 0.001

    //     let maxOffset = 6;
    //     let offsetMag = p.map(d, 4, 400, maxOffset, 0, true);

    //     let ox = (dx /d) * offsetMag;
    //     let oy = (dy / d) * offsetMag;

    //     let sx = this.x + ox;
    //     let sy = this.y + oy;

    //     let shadS = 50;
    //     let shadB = 25;
    //     let shadA = 0.9;

    //     let shadCol = p.color(currentHue, shadS, shadB, shadA)

    //     this.p.fill(shadCol);
    //     this.p.circle(this.sx,this.sy,this.size*2);
    // }
  
    update() {
      // let fromMouse = this.p.dist(this.p.mouseX,this.p.mouseY,this.x,this.y);
      // let sizeMult = fromMouse < 100 ? this.p.map(fromMouse,100,0,1,3) : 1;

      let fromMouse = this.p.dist(p.mouseX,p.mouseY,this.x,this.y)
      let fromBall = this.p.dist(ballX,ballY,this.x,this.y)
      let fromBall2 = this.p.dist(ballX2,ballY2,this.x,this.y)
      let fromBall3 = this.p.dist(ballX3,ballY3,this.x,this.y)
      let fromBall4 = this.p.dist(ballX4,ballY4,this.x,this.y)

      // let limit1 = p.width/7;
      let limit1 = 250
      let limit2 = 350
      let ballAdj = fromBall < limit1 ?  this.p.map(fromBall,limit1,0,1,2.5) : 1;
      let ballAdj2 = fromBall2 < limit1 ?  this.p.map(fromBall2,limit1,0,1,2.5) : 1;
      let ballAdj3 = fromBall3 < limit2 ?  this.p.map(fromBall3,limit2,0,1,2.5) : 1;
      let ballAdj4 = fromBall4 < limit2 ?  this.p.map(fromBall4,limit2,0,1,2.5) : 1;

      let baseSize = 2.6;
      let maxMult = 3.4;
      if (p.width < 640) {
        baseSize = 1.2
        maxMult = 5
      }

      let totalAdj = (ballAdj * ballAdj2 * ballAdj3 * ballAdj4) > maxMult ? maxMult : ballAdj * ballAdj2 * ballAdj3 * ballAdj4;
      // let sizeAdj = fromMouse < 150 ? this.p.map(fromMouse,150,0,0,-.125) : 0;

      // let fromDot = p.dist(this.x,this.y,ballX,ballY);
      // let limit = p.width/10;
      let limit = 150;
      // let lerpVal = fromMouse < limit ? 0 : p.map(fromMouse,limit,0,0,1);
      // this.col = p.lerpColor(this.baseCol,this.highlight,lerpVal);

      this.size = fromMouse < limit ? this.p.map(fromMouse,limit,0,baseSize,baseSize/5) * totalAdj : baseSize * totalAdj;
    
      let pointS = 5;
      let pointB = 65;
      this.col = this.p.color(currentHue, pointS, pointB, .5);
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

export default sketch2;