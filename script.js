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

// PAGE NAVIGATION & MUSIC START
let currentPage = 0;
const pages = document.querySelectorAll(".page");
const music = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicControl");
let isPlaying = false;

function startExperience() {
    // Music Auto-play trigger
    if (music && !isPlaying) {
        music.volume = 0.5;
        music.play().then(() => {
            isPlaying = true;
            if (musicBtn) musicBtn.innerHTML = "⏸️";
        }).catch(err => console.log("Autoplay prevented:", err));
    }
    nextPage();
}

function nextPage() {
    if (currentPage < pages.length - 1) {
        pages[currentPage].classList.remove("active");
        currentPage++;
        pages[currentPage].classList.add("active");
    }
}

// MUSIC TOGGLE BUTTON
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

// CLICKABLE PHOTO GALLERY LOGIC
const photos = [
    "1.png",
    "2.png",
    "3.png",
    "4.png",
    "5.png"
];

let photoIndex = 0;

function updatePhoto() {
    const img = document.getElementById("photoSlider");
    const counter = document.getElementById("photoCounter");
    if (!img) return;

    img.style.opacity = "0.2";

    setTimeout(() => {
        img.src = photos[photoIndex];
        img.style.opacity = "1";
        if (counter) {
            counter.innerText = `${photoIndex + 1} / ${photos.length}`;
        }
    }, 200);
}

function nextPhoto() {
    photoIndex = (photoIndex + 1) % photos.length;
    updatePhoto();
}

function prevPhoto() {
    photoIndex = (photoIndex - 1 + photos.length) % photos.length;
    updatePhoto();
}

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

// TYPING EFFECT FOR LETTER
const letterMessage = `Happy 12th Birthday to my sweetest little sister! 🎂💖\n\nWatching you grow up into such a kind, polite, and bright girl makes me so proud every single day.\n\nMay your school days be fun, your dreams come true, and your heart stay filled with laughter and love.\n\nNo matter how big you grow, you will always be my tiny Chuti! 💕✨`;

let charIndex = 0;
let isTypingStarted = false;

function startTypingEffect() {
    const typedTextElement = document.getElementById("typedText");
    if (!typedTextElement || isTypingStarted) return;
    
    isTypingStarted = true;
    typedTextElement.innerText = "";

    function typeChar() {
        if (charIndex < letterMessage.length) {
            typedTextElement.innerText += letterMessage.charAt(charIndex);
            charIndex++;
            setTimeout(typeChar, 35); // Typing Speed (35ms)
        }
    }
    typeChar();
}

// NEXT PAGE FUNCTION WITH TYPING TRIGGER
function nextPage() {
    if (currentPage < pages.length - 1) {
        pages[currentPage].classList.remove("active");
        currentPage++;
        pages[currentPage].classList.add("active");

        // Message page (index 4) එකට ආව ගමන් typing effect එක start වෙනවා
        if (pages[currentPage].id === "message") {
            startTypingEffect();
        }
    }
}
