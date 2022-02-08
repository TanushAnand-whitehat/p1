nose_x = 0;
nose_y = 0;
function preload() {
    clown_nose = loadImage('https://i.postimg.cc/kgPJxf8T/clown-nose-2-removebg-preview.png');
}
function setup() {
canvas = createCanvas(400, 300);
canvas.center();
video = createCapture(VIDEO);
video.size(400, 300);
video.hide();

poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPoses);
}
function draw() {
    image(video, 0, 0, 400, 300);
    image(clown_nose, nose_x, nose_y, 60, 30);
}
function take_snapshot() {
    save('filter_image.png');
}
function modelLoaded() {
    console.log("loaded");
}
function gotPoses(results) {
    if(results.length > 0) {
        console.log(results);
        console.log("nose x = " + results[0].pose.nose.x);
        console.log("nose y = " + results[0].pose.nose.y);
        nose_x = results[0].pose.nose.x - 28;
        nose_y = results[0].pose.nose.y - 17;
    }
}
