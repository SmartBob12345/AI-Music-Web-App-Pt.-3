jack = "";
dra = "";
left_x = 0;
left_y = 0;
right_x = 0;
right_y = 0;
function preload() {
    jack = loadSound("Jack Harlow.mp3");
    dra = loadSound("Drake.mp3");
}
function setup() {
    canvas = createCanvas(400, 800);
    canvas.center();
    camera = createCapture(VIDEO);
    camera.hide();
    classify = ml5.poseNet(camera, modelloaded);
    classify.on("pose", gotPoses);
}
function draw() {
    image(camera, 0, 0, 400, 400);
}

function modelloaded() {
    console.log("PoseNet is loaded.");
}

function gotPoses(result, error) {
        if (error) {
            console.log(error);
        }
        else {
                console.log(result);
                left_x = result[0].pose.leftWrist.x;
                left_y = result[0].pose.leftWrist.y;
                right_x = result[0].pose.rightWrist.x;
                right_y = result[0].pose.rightWrist.y;
                console.log("Left x & y: ", left_x + " & " + left_y);
                console.log("Right x & y: ", right_x + " & " + right_y);
    }
}