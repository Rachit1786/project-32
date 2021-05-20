const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg ;

function preload() {
    getBackgroundImg();
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){

    if(backgroundImg){
        background(backgroundImg);
    }

    Engine.update(engine);
}

async function getBackgroundImg(){
    var response=await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON=await response.json();
    console.log(responseJSON);
    var datetime = responseJSON.datetime;
    var hour = datetime.slice(11,13);

    if(hour>=05 && hour<07){
        bg="sunrise1.png";
    }else if(hour>=07-01 && hour==08){
        bg = "sunrise2.png";
    }else if(hour>=08-01 && hour==10){
        bg = "sunrise3.png";
    }else if(hour>=10-1 && hour==11){
        bg = "sunrise4.png";
    }else if(hour>=11 && hour==14){
        bg = "sunrise5.png";
    }else if(hour>=14 && hour==16){
        bg = "sunrise6.png";
    }else if(hour>=16 && hour==17){
        bg = "sunset7.png";
    }else if(hour>=17 && hour==18){
        bg = "sunser8.png";
    }else if(hour>=18 && hour==20){
        bg = "sunset9.png";
    }else if(hour>=20 && hour==21){
        bg = "sunset10.png";
    }else if(hour>=21 && hour==00){
        bg = "sunset11.png";
    }else if(hour>=00 && hour==05){
        bg = "sunset12.png";
    }

    backgroundImg=loadImage(bg);

}