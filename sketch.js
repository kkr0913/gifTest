var gifLength = 2;
var canvas;
var img1, img2;
var bool = true;

function preload() {
	img1 = loadImage('title1.png');
	img2 = loadImage('title2.png');
	img3 = loadImage('title3.png');
}

function setup() {
	var p5Canvas = createCanvas(950, 550);
	canvas = p5Canvas.canvas;
	imageMode(CENTER);
	frameRate(2);
}

function draw() {
	console.log(frameCount);
	if (frameCount === 4) { capturer.start(); }
	if (frameCount < 4+gifLength) {
		capturer.capture(canvas);
	} else if (frameCount === 4+gifLength) {
		console.log('done');
		capturer.stop();
		capturer.save();
	}
	
	if (bool) { image(img3, width/2, height/2); }
	else { image(img2, width/2, height/2); }
	bool = !bool;
}
