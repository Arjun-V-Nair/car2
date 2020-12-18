canvas= document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
car_height=90;
car_width=100;
car_x=10;
car_y=10;
car_width2 = 100;
car_height2 = 90;
car_x2 = 50;
car_y2 = 200;
background_img="canvabg.png";
car_img="car1.png";
car_img2 ="car2.png";
function add(){
    back_img=new Image();
    back_img.onload=upload_back_img;
    back_img.src=background_img;
    cars_img=new Image();
    cars_img.onload=upload_car_img;
    cars_img.src=car_img;
    cars_img2 =new Image();
    cars_img2.onload = upload_car_img2;
    cars_img2.src = car_img2;
}
function upload_car_img(){
    ctx.drawImage(cars_img,car_x,car_y,car_width,car_height);
}
function upload_back_img(){
    ctx.drawImage(back_img,0,0,canvas.width,canvas.height);
}
function upload_car_img2(){
    ctx.drawImage(cars_img2,car_x2,car_y2,car_width2,car_height2);
}
window.addEventListener("keydown",kdown);
function kdown(e){
var keyval=e.keyCode;
if(keyval=='37'){
   left()
    console.log("left");
}
if(keyval=='38'){
   Top()
    console.log("top");
}
if(keyval=='39'){
    right()
    console.log("right");
}
if(keyval=='40'){
    down()
    console.log("down");
}
if (keypressed =="87") {
    Top2();
    console.log("w key");
}
if (keypressed =="83") {
    down2();
    console.log("s key");
}
if (keypressed =="65") {
    left2();
    console.log("a key");
}
if (keypressed =="68") {
    right2();
    console.log("d key");
}
}
function left(){
    if(car_x>=0){
car_x=car_x-10;
upload_back_img()
upload_car_img()
    }
}
function left2(){
    if(car_x2>=0){
car_x2=car_x2-10;
upload_back_img()
upload_car_img2()
    }
}
function right(){
    if(car_x<=700){
car_x=car_x+10;
upload_back_img()
upload_car_img()
    }
}
function right2(){
    if(car_x2<=700){
car_x2=car_x2+10;
upload_back_img()
upload_car_img2()
    }
}
function Top(){
if(car_y>=0){
    car_y=car_y-10;
    upload_back_img()
    upload_car_img()
}
}
function Top2(){
    if(car_y2>=0){
        car_y2=car_y2-10;
        upload_back_img()
        upload_car_img2()
    }
    }
function down(){
    if(car_y<=500){
        car_y=car_y+10;
        upload_back_img()
        upload_car_img()
    }
}
function down2(){
    if(car_y2<=500){
        car_y2=car_y2+10;
        upload_back_img()
        upload_car_img2()
    }
}
if (car_x>700)
    {
    console.log("car1 won");
    document.getElementById('game_status').innerHTML = "car 1 Won!!";   
    }
    if (car_x2>700)
    {
    console.log("car2 won");
    document.getElementById('game_status').innerHTML = "car 2 Won!!";   
    }