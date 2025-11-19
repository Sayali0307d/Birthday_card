// Floating Heart Animation
function createHeart() {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.innerHTML = "💖";

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = Math.random() * 3 + 2 + "s";

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 5000);
}
setInterval(createHeart, 500);


// Sparkle Twinkle Effect
setInterval(() => {
    document.querySelector(".sparkles").style.opacity =
        0.3 + Math.random() * 0.4;
}, 800);


// Card Pop Effect when Clicked
document.querySelector(".card").addEventListener("click", () => {
    document.querySelector(".card").style.transform =
        "translate(-50%, -50%) scale(1.05)";
    setTimeout(() => {
        document.querySelector(".card").style.transform =
            "translate(-50%, -50%) scale(1)";
    }, 300);
});


// Surprise Message After 3 Seconds
setTimeout(() => {
    alert("🎉 Surprise! Wishing you a wonderful birthday filled with love and joy! 🎂💗");
}, 3000);
