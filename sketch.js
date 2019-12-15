var gifLength = 2;
var canvas;
var img1, img2;
var bool = true;

function preload() {
	img1 = loadImage('title1.png');
	img2 = loadImage('title2.png');
}

function setup() {
	var p5Canvas = createCanvas(950, 550);
	canvas = p5Canvas.canvas;
	imageMode(CENTER);
	frameRate(2);
	capturer.start();
}

function draw() {
	console.log(frameCount);
	if (bool) { image(img1, width/2, height/2); }
	else { image(img2, width/2, height/2); }
	bool = !bool;
	
	if (frameCount < gifLength) {
		capturer.capture(canvas);
	} else if (frameCount === gifLength) {
		console.log('done');
		capturer.stop();
		capturer.save();
	}
}
