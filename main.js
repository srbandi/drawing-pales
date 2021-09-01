canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
mouseevent="";
var lx,ly;
colour="black";
width=2;
canvas.addEventListener("mousedown",mymousedown);
function mymousedown(event){
    mouseevent="mousedown";
}

canvas.addEventListener("mouseup",mymouseup);
function mymouseup(event){
    mouseevent="mouseup";
}

canvas.addEventListener("mouseleave",mymouseleave);
function mymouseleave(event){
    mouseevent="mouseleave";
}

canvas.addEventListener("mousemove",mymousemove);
function mymousemove(event){
cx=event.clientX-canvas.offsetLeft;
cy=event.clientY-canvas.offsetTop;
if(mouseevent=="mousedown"){
    ctx.beginPath();
    ctx.strokeStyle=colour;
    ctx.lineWidth=width;
    ctx.moveTo(lx,ly);
    ctx.lineTo(cx,cy);
    ctx.stroke();
}
lx=cx;
ly=cy;
}
function clearing(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
}