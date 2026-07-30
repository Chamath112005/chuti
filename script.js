// ================================
// LOADING SCREEN
// ================================

window.addEventListener("load",()=>{

    setTimeout(()=>{

        document.getElementById("loading")
        .style.display="none";

    },2500);

});





// ================================
// PAGE NAVIGATION
// ================================


let currentPage = 0;


const pages = document.querySelectorAll(".page");



function nextPage(){

    pages[currentPage]
    .classList.remove("active");


    currentPage++;


    if(currentPage >= pages.length){

        currentPage = pages.length-1;

    }


    pages[currentPage]
    .classList.add("active");

}




// ================================
// MUSIC SYSTEM

const music = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicControl");

let musicPlaying = false;


// try autoplay

window.addEventListener("load",()=>{

    music.volume = 0.6;

    let playPromise = music.play();

    if(playPromise !== undefined){

        playPromise
        .then(()=>{

            musicPlaying=true;
            musicBtn.innerHTML="⏸️";

        })
        .catch(()=>{

            console.log(
            "Autoplay blocked by browser"
            );

        });

    }

});



// first button click start music

document.querySelector(".page button")
.addEventListener("click",()=>{

    music.play();

    musicPlaying=true;

    musicBtn.innerHTML="⏸️";

});





// Music button

musicBtn.onclick=function(){

if(musicPlaying){

    music.pause();

    musicBtn.innerHTML="🎵";

}
else{

    music.play();

    musicBtn.innerHTML="⏸️";

}


musicPlaying=!musicPlaying;


};







// PHOTO SLIDESHOW


const photos=[

"photo1.jpg",

"photo2.jpg",

"photo3.jpg",

"photo4.jpg",

"photo5.jpg"

];


let photoIndex=0;



setInterval(()=>{


const image =
document.getElementById("photoSlider");


if(!image) return;



photoIndex++;


if(photoIndex >= photos.length){

photoIndex=0;

}



image.style.opacity="0";



setTimeout(()=>{


image.src =
"assets/images/"
+
photos[photoIndex];


image.style.opacity="1";


},500);



},3500);









// ================================
// FIREWORKS SYSTEM
// ================================



const canvas =
document.createElement("canvas");


document.body.appendChild(canvas);



canvas.style.position="fixed";

canvas.style.top="0";

canvas.style.left="0";

canvas.style.pointerEvents="none";

canvas.style.zIndex="5";



const ctx =
canvas.getContext("2d");



function resize(){

canvas.width =
window.innerWidth;


canvas.height =
window.innerHeight;

}


resize();


window.addEventListener(
"resize",
resize
);




let particles=[];



function createFirework(){


let x =
Math.random()*canvas.width;


let y =
Math.random()*canvas.height/2;



for(let i=0;i<60;i++){


particles.push({

x:x,

y:y,

speedX:
(Math.random()-0.5)*8,

speedY:
(Math.random()-0.5)*8,


life:100

});


}


}




function animateFireworks(){


ctx.clearRect(
0,
0,
canvas.width,
canvas.height
);



particles.forEach((p)=>{


ctx.beginPath();


ctx.arc(
p.x,
p.y,
3,
0,
Math.PI*2
);


ctx.fillStyle="white";


ctx.fill();



p.x += p.speedX;


p.y += p.speedY;


p.life--;


});



particles =
particles.filter(
p=>p.life>0
);



requestAnimationFrame(
animateFireworks
);


}




setInterval(
createFirework,
1200
);


animateFireworks();







// ================================
// HEART FLOAT EFFECT
// ================================


function createHeart(){


let heart =
document.createElement("div");


heart.innerHTML="💖";


heart.style.position="fixed";


heart.style.left =
Math.random()*100+"%";


heart.style.bottom="-20px";


heart.style.fontSize =
"25px";


heart.style.zIndex="3";


heart.style.animation=
"heartMove 5s linear";



document.body.appendChild(heart);



setTimeout(()=>{

heart.remove();

},5000);


}



setInterval(
createHeart,
700
);
