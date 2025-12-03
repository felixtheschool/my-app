const quotes = [
    "You are capable of amazing things.",
    "Small steps every day lead to big results.",
    "Believe you can and you're halfway there.",
    "Dream it. Wish it. Do it.",
    "Success is not final; failure is not fatal."
];

const quoteEl = document.getElementById("quote");
const metaEl = document.getElementById("quoteMeta");
const newQuoteBtn = document.getElementById("newQuoteBtn");
const favoriteBtn = document.getElementById("favoriteBtn");
const favoritesListEl = document.getElementById("favoritesList");

let lastIndex = null;
const seenQuotes = new Set();
let currentQuoteText = quoteEl.textContent;

let favorites = [];

// ---- Meta / Quotes ----
function updateMeta() {
    metaEl.textContent = `You’ve seen ${seenQuotes.size} of ${quotes.length} quotes.`;
}

function getRandomIndex() {
    if (quotes.length === 1) return 0;

    let index;
    do {
        index = Math.floor(Math.random() * quotes.length);
    } while (index === lastIndex);

    return index;
}

function showNewQuote() {
    const index = getRandomIndex();
    lastIndex = index;

    seenQuotes.add(index);
    updateMeta();

    const newText = quotes[index];

    quoteEl.classList.add("fade-out");
    setTimeout(() => {
        quoteEl.textContent = newText;
        currentQuoteText = newText;
        quoteEl.classList.remove("fade-out");
    }, 300);

    // Save last shown quote in localStorage (used in next stage too)
    localStorage.setItem("lastQuote", newText);
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

// ---- Init ----
newQuoteBtn.addEventListener("click", showNewQuote);
favoriteBtn.addEventListener("click", addCurrentToFavorites);

loadFavorites();
renderFavorites();
updateMeta();

// If we have a lastQuote saved, use it initially
const lastQuote = localStorage.getItem("lastQuote");
if (lastQuote) {
    quoteEl.textContent = lastQuote;
    currentQuoteText = lastQuote;
}
