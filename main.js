fil = "";
nosex = 0;
nosey = 0;
lex = 0;
ley = 0;
function preload(){
    img = loadImage("https://i.postimg.cc/QxdjX9Gr/imgbin-clown-drawing-laughter-png.png");
    img2 = loadImage("https://i.postimg.cc/JhNdSxhc/Sunglasses.png");
    img3 = loadImage("https://i.postimg.cc/B6KQ4zXy/710051.png");
}
function setup(){
    canvas = createCanvas(400, 400);
    canvas.position();
    video = createCapture(VIDEO);
    video.size(400, 400);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function modelLoaded(){
    console.log("ModelLoaded!!!");
}
function gotPoses(results){
    if (results.length > 0){
        console.log(results);
        console.log("nose x =" + results[0].pose.nose.x);
        nosex = results[0].pose.nose.x;
        console.log("nose y =" + results[0].pose.nose.y);
        nosey = results[0].pose.nose.y;
        lex = results[0].pose.leftEye.x;
        console.log(lex, ley);
        ley = results[0].pose.leftEye.y;
    }
}
function draw(){
    image(video, 0, 0, 400, 400);
    if (fil == "clown"){
        image(img, nosex - 18, nosey - 18, 40, 40);
    }
    if(fil == "goggles"){
        image(img2, lex - 67, ley - 20, 100, 50);
    }
    if(fil == "lip"){
        image(img3, nosex - 22, nosey + 4, 40, 40)
    }
}
function tss(){
    save("snapchatphoto.png");
}
function clown(){
    fil = "clown";
}
function goggles(){
    fil = "goggles";    
}
function lip(){
    fil = "lip"
}