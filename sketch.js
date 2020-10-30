let angle = 0;
let mySong;
let myFont;
var myImage;
function preload(){
    mySong = loadSound("./assets/idea.mp3");
    myFont = loadFont('./assets/NHaasGroteskTXPro-65Md.ttf')
    myImage = loadImage('./assets/pino2.png')
  // put preload code here
}

function setup() {
  createCanvas(windowWidth,windowHeight, WEBGL)

  analyzer = new p5.Amplitude();
analyzer.setInput(mySong);

  // put setup code here
}

function draw() {
  background(color('orange'))


  volume = analyzer.getLevel();
     volume = map(volume,0,1,400,900);


  ambientLight(150)

  directionalLight(0, 0, 255, -1, 0 , 0)
  directionalLight(255, 0, 0, 1 , 0 , 0)
  //luce giusta
    // directionalLight(255, 255, 255, 1 , -1 , 0)

//testo1
push();
  var myText = "CHE \nIDEA!";
  fill(color('red'));
  textSize(200)
  textFont(myFont)
  text(myText, 0-windowWidth/2, 0-windowHeight/3);
  pop()

  //testo2
  push();
    var myText2 = "'80";
    fill(color('red'));
    textSize(200)
    textFont(myFont)
    text(myText2, windowWidth/3, windowHeight/2);
    pop()


//cubo
push();
  noStroke();
// specularMaterial(0);
  rotateX(angle);
  rotateY(angle*0.07);
  rotateZ(angle*0.03)
  texture(myImage);
box(volume)


angle += 0.05;
pop();



push();
 //bottone
 var buttonText = "PLAY"
 button = createButton(buttonText);
 button.style("background-color", "orange");
 button.style("color", "red");
 button.style("cursor", "pointer")
 button.style("font-size", "20px");
 button.style("width", "120px");
 button.style("font-family", myFont);
 button.style("padding", "8px 20px 8px 20px");
 button.style("border-radius", "15px");
 button.style("border-style", "solid");
 button.style("border-color", "red");
 button.style("border-width", "2px");
 button.position(windowWidth / 2 - 60, windowHeight / 20)

 //per musica
 button.mousePressed(
   function() {
     if (mySong.isPlaying()) {
       mySong.stop();
       button.html("PLAY")
       textShow = true;
     } else {
       mySong.play();
       button.html("PAUSE")
       textShow = false;
     }
   })

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
