// HIDE LOADING SCREEN
window.addEventListener("load", () => {
    setTimeout(() => {
        const loader = document.getElementById("loading");
        if (loader) {
            loader.style.opacity = "0";
            setTimeout(() => loader.style.display = "none", 500);
        }
    }, 2000);
});

// PAGE NAVIGATION
let currentPage = 0;
const pages = document.querySelectorAll(".page");

function nextPage() {
    if (currentPage < pages.length - 1) {
        pages[currentPage].classList.remove("active");
        currentPage++;
        pages[currentPage].classList.add("active");
    }
}

// MUSIC SYSTEM
const music = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicControl");
let isPlaying = false;

document.addEventListener("click", () => {
    if (!isPlaying && music) {
        music.volume = 0.5;
        music.play().then(() => {
            isPlaying = true;
            if (musicBtn) musicBtn.innerHTML = "⏸️";
        }).catch(err => console.log("Autoplay blocked:", err));
    }
}, { once: true });

if (musicBtn) {
    musicBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        if (isPlaying) {
            music.pause();
            musicBtn.innerHTML = "🎵";
        } else {
            music.play();
            musicBtn.innerHTML = "⏸️";
        }
        isPlaying = !isPlaying;
    });
}

// PHOTO SLIDESHOW (Root directory images)
const photos = [
    "1.png",
    "2.png",
    "3.png",
    "4.png",
    "5.png"
];

let photoIndex = 0;

setInterval(() => {
    const img = document.getElementById("photoSlider");
    if (!img) return;

    photoIndex = (photoIndex + 1) % photos.length;
    img.style.opacity = "0";

    setTimeout(() => {
        img.src = photos[photoIndex];
        img.style.opacity = "1";
    }, 500);
}, 3500);

// FLOATING HEARTS EFFECT
function createHeart() {
    const heart = document.createElement("div");
    heart.innerHTML = "💖";
    heart.style.position = "fixed";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.bottom = "-20px";
    heart.style.fontSize = (Math.random() * 15 + 15) + "px";
    heart.style.opacity = Math.random() * 0.7 + 0.3;
    heart.style.pointerEvents = "none";
    heart.style.zIndex = "1";
    heart.style.transition = "transform 6s linear, opacity 6s linear";

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.style.transform = `translateY(-105vh) rotate(${Math.random() * 360}deg)`;
    }, 50);

    setTimeout(() => heart.remove(), 6000);
}

setInterval(createHeart, 800);
