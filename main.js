function preload()
{

}

function setup()
{
    canvas = createCanvas(640, 480);
    canvas.position(110, 250);
    video = createCapture(VIDEO);
    video.hide();

}

function draw()
{
    image(video, 0, 0, 640, 480);
    fill('#E389B9');
    rect(440, 80, 80, 80);
    fill('#00ffcc')
    circle(70, 250, 100);
    fill('#cc0000')
    circle(470, 360, 100);
}

function take_snapshot()
{
    save('filter.png')
}