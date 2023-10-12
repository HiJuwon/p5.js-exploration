// Oct. 2023
// Yeom Juwon

let colorArray = [];

const BLUE = "#3330E4";
const PINK = "#F637EC";
const ORANGE = "#FBB454";
const YELLOW = "#FAEA48";

let button;

function setup() {
  createCanvas(400, 400);
  
  button = createButton("Draw pattern!");
  button.position(canvas,600);
  button.size(120, 40);
  button.mousePressed(sketch);
  
  sketch();
}

function draw() {
  background(YELLOW);

  //기본 도형 격자 패턴
  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
      //필요한 변수: 도형의 가로/세로 길이, 간격, 위치
      let width = 60;
      let height = 60;
      let gap = 10;
      let x = 30 + (width + gap) * i;
      let y = 30 + (height + gap) * j;
      
      //기본 사각형 스타일 설정
      strokeWeight(3);
      stroke("black");
      noFill();
      
      //사각형 그리기
      rect(x, y, width, height);
      
      //랜덤으로 작은 사각형 색깔 설정하고 사각형 그리기
      strokeWeight(3);
      stroke(BLUE);
      fill(colorArray[i * 5 + j]);
      
      rect(x + 8, y + 8, width - 16, height - 16);
      
      if (colorArray[i * 5 + j] == PINK) {
        ellipse(x + 30, y + 30, width - 24, height - 24);
      }
      
      if (colorArray[i * 5 + j] == BLUE) {
        stroke(YELLOW);
        ellipse(x + 30, y + 30, width - 24, height - 24);
      }
    }
  }
}

function sketch() {
  colorArray.splice(0);
  
  for (let i = 0; i < 25; i++) {
    if (random(10) < 3) {
      colorArray.push(BLUE);
    }
    else if (random(10) >= 3 && random(10) < 6) {
      colorArray.push(PINK);
    }
    else if (random(10) >= 6 && random(10) < 9) {
      colorArray.push(ORANGE);
    }
    else {
      colorArray.push(YELLOW);
    }
  }
}