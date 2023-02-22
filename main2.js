function preload(){
    img = loadImage('frutero.jpg');
  }
  
  
  function setup() {
    canvas = createCanvas(380, 380);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(380, 380);
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Estado: detectando objetos";
    video.hide();
  }