function setup() {
    canvas = createCanvas(500, 500);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(455, 355);

    posenet = ml5.poseNet(video, modelLoaded);
    posenet.on('pose', gotPoses);
}
function modelLoaded() {
    console.log("EM BORUTO: NARUTO THE MOVIE, O NARUTO GANHA UM ÓCULOS QUE SIMULA O BYAKUGAN DA HINATA");
}
function gotPoses(results) {
    if(results.length > 0){
        console.log(results)
    }   
}