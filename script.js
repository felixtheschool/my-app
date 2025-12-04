const themeToggleBtn = document.getElementById("themeToggle");

const quotes = [
    "You are capable of amazing things.",
    "Small steps every day lead to big results.",
    "Believe you can and you're halfway there.",
    "Dream it. Wish it. Do it.",
    "Success is not final; failure is not fatal."
];
// ---- Theme / Dark mode ----
function applyTheme(theme) {
    if (theme === "dark") {
        document.body.classList.add("dark");
        themeToggleBtn.textContent = "☀️";
    } else {
        document.body.classList.remove("dark");
        themeToggleBtn.textContent = "🌙";
    }
}

function loadTheme() {
    const stored = localStorage.getItem("theme");
    if (stored === "dark" || stored === "light") {
        applyTheme(stored);
    } else {
        // Default: light
        applyTheme("light");
    }
}

function toggleTheme() {
    const isDark = document.body.classList.contains("dark");
    const newTheme = isDark ? "light" : "dark";
    applyTheme(newTheme);
    localStorage.setItem("theme", newTheme);
}

//declaring constants refferencing html elements.
const quoteEl = document.getElementById("quote");
const metaEl = document.getElementById("quoteMeta");
const newQuoteBtn = document.getElementById("newQuoteBtn");
const favoriteBtn = document.getElementById("favoriteBtn");
const favoritesListEl = document.getElementById("favoritesList");
//share button
const shareBtn = document.getElementById("shareBtn");

let lastIndex = null;
const seenQuotes = new Set();
let currentQuoteText = quoteEl.textContent;
let favorites = [];

// ---- Helpers ----
function todayKey() {
    const d = new Date();
    // yyyy-mm-dd
    return d.toISOString().slice(0, 10);
}

function updateMeta() {
    metaEl.textContent = `You’ve seen ${seenQuotes.size} of ${quotes.length} quotes.`;
}

function getRandomIndex(excludeIndex = null) {
    if (quotes.length === 1) return 0;

    let index;
    do {
        index = Math.floor(Math.random() * quotes.length);
    } while (index === excludeIndex);

    return index;
}

function setQuote(text, index = null) {
    lastIndex = index;

    quoteEl.classList.add("fade-out");
    setTimeout(() => {
        quoteEl.textContent = text;
        currentQuoteText = text;
        quoteEl.classList.remove("fade-out");
    }, 300);
}

// ---- Quote of the day ----
function showQuoteOfTheDay() {
    const key = todayKey();
    const stored = localStorage.getItem("quoteOfTheDay");
    if (stored) {
        try {
            const parsed = JSON.parse(stored);
            if (parsed.date === key && typeof parsed.quote === "string") {
                // Same day: reuse
                setQuote(parsed.quote, parsed.index);
                if (typeof parsed.index === "number") {
                    seenQuotes.add(parsed.index);
                }
                updateMeta();
                return;
            }
        } catch (e) {
            // ignore parse error
        }
    }

    // New day or missing: pick a new quote
    const index = getRandomIndex();
    const text = quotes[index];

    setQuote(text, index);
    seenQuotes.add(index);
    updateMeta();

    localStorage.setItem(
        "quoteOfTheDay",
        JSON.stringify({ date: key, quote: text, index })
    );
}

// Button still shows a random new quote (not restricted to 1/day)
function showNewQuote() {
    const index = getRandomIndex(lastIndex);
    const text = quotes[index];

    seenQuotes.add(index);
    updateMeta();

    setQuote(text, index);
}

// ---- Favorites ----
function loadFavorites() {
    const stored = localStorage.getItem("favoriteQuotes");
    if (stored) {
        try {
            favorites = JSON.parse(stored);
        } catch (e) {
            favorites = [];
        }
    }
}

function saveFavorites() {
    localStorage.setItem("favoriteQuotes", JSON.stringify(favorites));
}

function renderFavorites() {
    favoritesListEl.innerHTML = "";

    if (favorites.length === 0) {
        const li = document.createElement("li");
        li.textContent = "No favorites yet.";
        li.style.fontSize = "0.8rem";
        li.style.color = "#777";
        favoritesListEl.appendChild(li);
        return;
    }

    favorites.forEach((text, index) => {
        const li = document.createElement("li");
        li.className = "favorite-item";

        const span = document.createElement("span");
        span.className = "favorite-text";
        span.textContent = text;

        const removeBtn = document.createElement("button");
        removeBtn.className = "remove-fav";
        removeBtn.textContent = "remove";
        removeBtn.dataset.index = index;

        li.appendChild(span);
        li.appendChild(removeBtn);
        favoritesListEl.appendChild(li);
    });
}

function addCurrentToFavorites() {
    const text = currentQuoteText.trim();
    if (!text || text === "Click the button for inspiration!") return;

    if (favorites.includes(text)) {
        alert("This quote is already in your favorites.");
        return;
    }

    favorites.push(text);
    saveFavorites();
    renderFavorites();
}

favoritesListEl.addEventListener("click", (event) => {
    if (event.target.classList.contains("remove-fav")) {
        const index = Number(event.target.dataset.index);
        favorites.splice(index, 1);
        saveFavorites();
        renderFavorites();
    }
});

//share button functions
function shareQuote() {
    console.log("sharing the quote");
    //anding quote text with trimmed version so it will be empty if nothing there
    const text = currentQuoteText && currentQuoteText.trim();
    //if text is null or has default fill, prompt to get a quote and exit the function
    if (!text || text === "Click the button for inspiration!") {
        alert("Get a quote first, then share it!");
        return;
    }
    //referencing text variable from currentquotetext var
    const shareText = `"${text}" - via Daily Motivation`;
    //modern browsers

    if (navigator.share) {
        navigator
            .share({
                title: "Daily Motivation",
                text: shareText,
                url: window.location.href
            })
            .catch(() => {

            });
        return;
    }
}







// ---- Init ---- event listeners and functions to execute on page load
//////////////////////////////////////////////////////////////////

themeToggleBtn.addEventListener("click", toggleTheme);

loadTheme();
loadFavorites();
renderFavorites();
updateMeta();
showQuoteOfTheDay();

newQuoteBtn.addEventListener("click", showNewQuote);
favoriteBtn.addEventListener("click", addCurrentToFavorites);
//share btn event listener triggering sharequote function
shareBtn.addEventListener("click", shareQuote);
loadFavorites();
renderFavorites();
updateMeta();
showQuoteOfTheDay();
