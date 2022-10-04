function preload() {    
}

function setup(){
    canvas= createCanvas(640,610)
    canvas.position(110,250)
    video = createCapture(VIDEO);
    video.hide();

    tint_color = "";
}
function draw() {
    image(video,0,0, 640, 480);
    fill(0,128,0)
    circle(590,35,70)
    circle(35,35,70)
    circle(35,580,70)
    circle(590,580,70)
    tint(tint_color);
}

function take_snapshot(){
    save('student_name.png');
}

function filter_tint()
{
    tint_color = document.getElementById("color_name").value  
}