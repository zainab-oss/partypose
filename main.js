noseX =0;
noseY = 0;

function preload()
{
lip_image = loadImage("https://i.postimg.cc/NMcLn1Fp/lip.png");
}

function setup()
{
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses);
}

function draw()
{
    image(video, 0, 0, 300, 300);
    image(lip_image, noseX, noseY, 30, 30);
}

function modelLoaded()
{
    console.log("poseNet is initialized");
}

function gotPoses(results)
{
    if (results.length > 0)
    {
        console.log(results);
    noseX = results[0].pose.nose.x-15;
    noseY = results[0].pose.nose.y+18;
    console.log("nose x = " + noseX);
    console.log("nose Y = " + noseY);
    }
}

function take_snapshot()
{
    save("partypic.png");
}