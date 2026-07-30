// Loading screen

window.onload=function(){

setTimeout(()=>{

document.getElementById("loader").style.display="none";

},2500);

}



// Music

let music=document.getElementById("music");


function startMusic(){

music.play();

}



let playing=false;


document.getElementById("musicBtn")
.onclick=function(){

if(playing){

music.pause();

this.innerHTML="🎵";

}

else{

music.play();

this.innerHTML="⏸️";

}


playing=!playing;

}





// Image slideshow


let images=[

"photo1.jpg",
"photo2.jpg",
"photo3.jpg",
"photo4.jpg",
"photo5.jpg"

];


let index=0;


setInterval(()=>{

index++;

if(index>=images.length)
index=0;


document.getElementById("slide").src=
"assets/images/"+images[index];


},3000);





// Simple fireworks/confetti


const canvas=document.getElementById("fireworks");

const ctx=canvas.getContext("2d");


canvas.width=innerWidth;

canvas.height=innerHeight;


let particles=[];


function firework(){

for(let i=0;i<50;i++){

particles.push({

x:innerWidth/2,

y:innerHeight/2,

dx:(Math.random()-0.5)*8,

dy:(Math.random()-0.5)*8,

life:100

});

}

}


function animate(){

ctx.clearRect(0,0,canvas.width,canvas.height);


particles.forEach((p)=>{

ctx.fillStyle="white";

ctx.fillRect(p.x,p.y,4,4);


p.x+=p.dx;

p.y+=p.dy;

p.life--;

});


particles=
particles.filter(p=>p.life>0);


requestAnimationFrame(animate);

}


setInterval(firework,1500);

animate();
