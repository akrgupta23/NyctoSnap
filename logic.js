function Drop() {
    var x = document.getElementById("navi2");
    var y = document.getElementById("menu");
    var z = document.getElementById("navi");
    if (x.style.display === "none") {
        x.style.display = "grid";
        x.style.animation = "viso 250ms";
        z.style.borderBottomLeftRadius = '0';
        z.style.borderBottomRightRadius = '0';
    }
    else {
        x.style.display = "none";
        z.style.borderBottomLeftRadius = '10px';
        z.style.borderBottomRightRadius = '10px';
    }
}

const imageFilenames = ["day.png", "moon.png", "sun.png", "night.png"];
imageFilenames.forEach((filename) => {
    const img = document.createElement("img");
    img.src = `/image/${filename}`;
});

function DropOut() {
    var x = document.getElementById("navi2");
    var y = document.getElementById("menu");
    var z = document.getElementById("navi");
    x.style.display = "none";
    y.style.background = "grey";
    z.style.borderBottomLeftRadius = '10px';
    z.style.borderBottomRightRadius = '10px';
}
function ThemeDown() {
    var x = document.getElementById("theme");
    var y = document.getElementById("themebtn");
    var z = document.getElementById("menu");
    if (x.style.display === "inline") {
        x.style.transition = "500ms"
        z.style.backgroundColor = "gray";
        x.style.opacity = "0%";
        setTimeout(() => { x.style.display = "none"; }, 4000);
    }
    else {
        x.style.opacity = "100%";
        x.style.marginTop = "73px";
        z.style.backgroundColor = "turquoise";
        x.style.display = "inline";
        setTimeout(() => {
            x.style.transition = "500ms"
            z.style.backgroundColor = "gray";
            x.style.opacity = "0%";
            setTimeout(() => { x.style.display = "none"; }, 600);
        }, 3000)
    }
}

if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    applyDarkTheme()
} else {
    applyLightTheme()
}

document.addEventListener("DOMContentLoaded", () => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "light") {
        applyLightTheme();
    } else {
        applyDarkTheme();
    }
});

function applyLightTheme() {
    var x = document.getElementById("togcir");
    var y = document.getElementById("theme");
    var c = document.getElementById("animated-text");
    let page = document.body;
    page.classList.add("themeswitch");
    x.style.marginLeft = "calc(100% - 32px)";
    x.style.backgroundImage = "url(/image/sun.png)";
    y.style.backgroundImage = "url(/image/day.png)";
    y.style.borderColor = "powderblue";
    y.style.boxShadow = "0 0 10px teal";
    c.style.color = "white";
    c.style.textShadow = "teal";
    a = true;
}

function applyDarkTheme() {
    var x = document.getElementById("togcir");
    var y = document.getElementById("theme");
    var c = document.getElementById("animated-text");
    let page = document.body;
    page.classList.remove("themeswitch");
    x.style.marginLeft = "0%";
    x.style.backgroundImage = "url(/image/moon.png)";
    y.style.backgroundImage = "url(/image/night.png)";
    y.style.borderColor = "grey";
    y.style.boxShadow = "0 0 10px white";
    c.style.color = "turquoise";
    a = false;
}

function themetog() {
    if (a === false) {
        applyLightTheme();
        localStorage.setItem("theme", "light");
    } else {
        applyDarkTheme();
        localStorage.setItem("theme", "dark");
    }
}

const words = ["Aperture", "Bokeh", "Contrast", "Exposure"]; // Array of words to type  
const animatedText = document.getElementById('animated-text');
let currentWordIndex = 0;
let currentCharIndex = 0;
let timeout; // Variable to save the timeout for clearTimeout  

function type() {
    const currentWord = words[currentWordIndex];

    // Add one character from the current word  
    if (currentCharIndex < currentWord.length) {
        animatedText.textContent = currentWord.substring(0, currentCharIndex + 1);
        currentCharIndex++;
        timeout = setTimeout(type, 100); // Type each character with a delay  
    } else { // Once the word is fully typed  
        setTimeout(backspace, 1500); // Stay on the full word for a second before backspacing  
    }
}

function backspace() {
    const currentWord = words[currentWordIndex];

    // Remove one character  
    if (currentCharIndex > 0) {
        animatedText.textContent = currentWord.substring(0, currentCharIndex - 1);
        currentCharIndex--;
        timeout = setTimeout(backspace, 70); // Backspace each character with a delay  
    } else { // Once the word is fully removed  
        currentWordIndex = (currentWordIndex + 1) % words.length; // Move to the next word  
        currentCharIndex = 0;
        setTimeout(type, 500); // Delay before typing the next word  
    }
}

// Start the animation  
type();