// Stoic quotes with text, author, and category
const quotes = [
    { id: 1, text: "You have power over your mind — not outside events. Realize this, and you will find strength.", author: "Marcus Aurelius", category: "control" },
    { id: 2, text: "We suffer more often in imagination than in reality.", author: "Seneca", category: "mind" },
    { id: 3, text: "It’s not what happens to you, but how you react to it that matters.", author: "Epictetus", category: "control" },
    { id: 4, text: "He who fears death will never do anything worthy of a man who is alive.", author: "Seneca", category: "time" },
    { id: 5, text: "The happiness of your life depends upon the quality of your thoughts.", author: "Marcus Aurelius", category: "mind" },
    { id: 6, text: "No man is free who is not master of himself.", author: "Epictetus", category: "control" },
    { id: 7, text: "Luck is what happens when preparation meets opportunity.", author: "Seneca", category: "simplicity" },
    { id: 8, text: "If it is not right, do not do it; if it is not true, do not say it.", author: "Marcus Aurelius", category: "virtue" },
    { id: 9, text: "Wealth consists not in having great possessions, but in having few wants.", author: "Epictetus", category: "simplicity" },
    { id: 10, text: "Begin at once to live, and count each separate day as a separate life.", author: "Seneca", category: "time" },
    { id: 11, text: "Very little is needed to make a happy life; it is all within yourself.", author: "Marcus Aurelius", category: "simplicity" },
    { id: 12, text: "Make the mind tougher by exposing it to adversity.", author: "Seneca", category: "adversity" },
    { id: 13, text: "First say to yourself what you would be; then do what you have to do.", author: "Epictetus", category: "virtue" },
    { id: 14, text: "Difficulties strengthen the mind, as labor does the body.", author: "Seneca", category: "adversity" },
    { id: 15, text: "The best revenge is not to be like your enemy.", author: "Marcus Aurelius", category: "virtue" },
    { id: 16, text: "Freedom is the only worthy goal in life.", author: "Epictetus", category: "control" },
    { id: 17, text: "He who angers you conquers you.", author: "Elizabeth Kenny", category: "mind" },
    { id: 18, text: "Associate with people who are likely to improve you.", author: "Seneca", category: "wisdom" },
    { id: 19, text: "Waste no more time arguing what a good man should be. Be one.", author: "Marcus Aurelius", category: "virtue" },
    { id: 20, text: "Circumstances don’t make the man; they reveal him to himself.", author: "Epictetus", category: "virtue" },
    { id: 21, text: "To be even-minded is the greatest virtue.", author: "Heraclitus", category: "mind" },
    { id: 22, text: "Sometimes even to live is an act of courage.", author: "Seneca", category: "adversity" },
    { id: 23, text: "The soul becomes dyed with the color of its thoughts.", author: "Marcus Aurelius", category: "mind" },
    { id: 24, text: "Only the educated are free.", author: "Epictetus", category: "wisdom" },
    { id: 25, text: "It is the power of the mind to be unconquerable.", author: "Seneca", category: "mind" },
    { id: 26, text: "Be tolerant with others and strict with yourself.", author: "Marcus Aurelius", category: "virtue" },
    { id: 27, text: "Control what you can. Let go of what you can’t.", author: "Epictetus", category: "control" },
    { id: 28, text: "Don’t explain your philosophy. Embody it.", author: "Epictetus", category: "virtue" },
    { id: 29, text: "If you live in harmony with nature, you will never be poor.", author: "Seneca", category: "simplicity" },
    { id: 30, text: "Accept the things to which fate binds you, and love the people with whom fate brings you together.", author: "Marcus Aurelius", category: "control" },
    { id: 31, text: "Man conquers the world by conquering himself.", author: "Zeno of Citium", category: "adversity" },
    { id: 32, text: "No great thing is created suddenly.", author: "Epictetus", category: "adversity" },
    { id: 33, text: "The whole future lies in uncertainty: live immediately.", author: "Seneca", category: "time" },
    { id: 34, text: "How much more grievous are the consequences of anger than the causes of it.", author: "Marcus Aurelius", category: "mind" },
    { id: 35, text: "We should always be asking ourselves: Is this something that is necessary?", author: "Marcus Aurelius", category: "virtue" },
    { id: 36, text: "You become what you give your attention to.", author: "Epictetus", category: "mind" },
    { id: 37, text: "He suffers more than necessary, who suffers before it is necessary.", author: "Seneca", category: "mind" },
    { id: 38, text: "What stands in the way becomes the way.", author: "Marcus Aurelius", category: "adversity" },
    { id: 39, text: "To bear trials with a calm mind robs misfortune of its strength.", author: "Seneca", category: "adversity" },
    { id: 40, text: "If you want to improve, be content to be thought foolish and stupid.", author: "Epictetus", category: "adversity" },
    { id: 41, text: "A gem cannot be polished without friction, nor a man perfected without trials.", author: "Seneca", category: "adversity" },
    { id: 42, text: "Be content to seem what you really are.", author: "Marcus Aurelius", category: "virtue" },
    { id: 43, text: "Nothing endures but change.", author: "Heraclitus", category: "time" },
    { id: 44, text: "The greater the difficulty, the more glory in surmounting it.", author: "Epicurus", category: "adversity" },
    { id: 45, text: "Where is the harm in saying what you think?", author: "Epictetus", category: "wisdom" },
    { id: 46, text: "Enjoy what you can, endure what you must.", author: "Marcus Aurelius", category: "adversity" },
    { id: 47, text: "The mind that is anxious about future events is miserable.", author: "Seneca", category: "mind" },
    { id: 48, text: "Nothing is worth doing pointlessly.", author: "Marcus Aurelius", category: "virtue" },
    { id: 49, text: "No evil is great unless you think it so.", author: "Epictetus", category: "mind" },
    { id: 50, text: "Do every act of your life as though it were the very last.", author: "Marcus Aurelius", category: "time" }
];

// Elements
const quoteEl = document.getElementById("quote");
const quoteAuthorEl = document.getElementById("quoteAuthor");
const quoteCategoryEl = document.getElementById("quoteCategory");
const metaEl = document.getElementById("quoteMeta");
const newQuoteBtn = document.getElementById("newQuoteBtn");
const favoriteBtn = document.getElementById("favoriteBtn");
const favoritesListEl = document.getElementById("favoritesList");
const themeToggleBtn = document.getElementById("themeToggle");
const shareBtn = document.getElementById("shareBtn");

// State
let lastIndex = null;
const seenQuotes = new Set();
let currentQuote = null; // { text, author, category }
let favorites = [];

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
        applyTheme("light");
    }
}

function toggleTheme() {
    const isDark = document.body.classList.contains("dark");
    const newTheme = isDark ? "light" : "dark";
    applyTheme(newTheme);
    localStorage.setItem("theme", newTheme);
}

// ---- Helpers ----
function todayKey() {
    const d = new Date();
    return d.toISOString().slice(0, 10); // yyyy-mm-dd
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

function setQuoteByIndex(index) {
    const quoteObj = quotes[index];
    currentQuote = quoteObj;
    lastIndex = index;

    quoteEl.classList.add("fade-out");
    setTimeout(() => {
        quoteEl.textContent = quoteObj.text;
        quoteAuthorEl.textContent = `— ${quoteObj.author}`;
        quoteCategoryEl.textContent = `Type: ${quoteObj.category}`;
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
            if (parsed.date === key && typeof parsed.index === "number") {
                const index = parsed.index;
                if (quotes[index]) {
                    seenQuotes.add(index);
                    setQuoteByIndex(index);
                    updateMeta();
                    return;
                }
            }
        } catch (e) {
            // ignore parse error
        }
    }

    // New day or invalid stored data
    const index = getRandomIndex();
    seenQuotes.add(index);
    updateMeta();
    setQuoteByIndex(index);

    localStorage.setItem(
        "quoteOfTheDay",
        JSON.stringify({ date: key, index })
    );
}

// Button: random new quote (not limited to 1/day)
function showNewQuote() {
    const index = getRandomIndex(lastIndex);
    seenQuotes.add(index);
    updateMeta();
    setQuoteByIndex(index);
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

    favorites.forEach((fav, index) => {
        const li = document.createElement("li");
        li.className = "favorite-item";

        const span = document.createElement("span");
        span.className = "favorite-text";
        span.textContent = fav; // already includes author

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
    if (!currentQuote) return;

    const favString = `"${currentQuote.text}" — ${currentQuote.author}`;
    if (favorites.includes(favString)) {
        alert("This quote is already in your favorites.");
        return;
    }

    favorites.push(favString);
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

// ---- Share ----
function fallbackPromptShare() {
    if (!currentQuote) return;
    const shareText = `"${currentQuote.text}" — ${currentQuote.author}`;
    window.prompt("Copy this quote:", shareText);
}

function shareQuote() {
    if (!currentQuote) {
        alert("Get a quote first, then share it!");
        return;
    }

    const shareText = `"${currentQuote.text}" — ${currentQuote.author} (type: ${currentQuote.category})`;

    // Modern browsers (especially mobile)
    if (navigator.share) {
        navigator
            .share({
                title: "Daily Stoic Motivation",
                text: shareText,
                url: window.location.href
            })
            .catch(() => {
                // user cancelled or share failed – silently ignore
            });
        return;
    }

    // Clipboard API fallback
    if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard
            .writeText(shareText)
            .then(() => {
                alert("Quote copied to clipboard! You can paste it anywhere.");
            })
            .catch(() => {
                fallbackPromptShare();
            });
        return;
    }

    // Old browsers
    fallbackPromptShare();
}

// ---- Init ----
newQuoteBtn.addEventListener("click", showNewQuote);
favoriteBtn.addEventListener("click", addCurrentToFavorites);
themeToggleBtn.addEventListener("click", toggleTheme);
shareBtn.addEventListener("click", shareQuote);

loadTheme();
loadFavorites();
renderFavorites();
updateMeta();
showQuoteOfTheDay();
