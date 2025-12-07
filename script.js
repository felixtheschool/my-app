/***********************
 * STOIC QUOTES DATA
 ***********************/
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

/***********************
 * AFFIRMATIONS DATA (50)
 ***********************/
const builtInAffirmations = [
    "I am capable of learning any skill I commit to.",
    "I choose progress over perfection today.",
    "I am calm, focused, and in control of my actions.",
    "I deserve to take up space and share my ideas.",
    "Challenges are opportunities for me to grow stronger.",
    "I am patient with myself as I learn.",
    "My mind is clear, sharp, and creative.",
    "I trust myself to make good decisions.",
    "I am proud of how far I’ve come.",
    "I am allowed to start small and still be proud.",
    "Every day I am becoming a better version of myself.",
    "I can handle whatever today brings.",
    "I speak kindly to myself, always.",
    "I am resilient, resourceful, and determined.",
    "I am worthy of rest and recovery.",
    "I am not behind; I am on my own perfect schedule.",
    "I attract positive opportunities and people.",
    "I am building a life I am excited to wake up to.",
    "I choose to see obstacles as lessons.",
    "I am strong enough to let go of what I cannot control.",
    "My efforts today are investments in my future.",
    "I am confident in my ability to solve problems.",
    "I am grateful for the small wins along the way.",
    "I am capable of deep focus when I need it.",
    "My mistakes do not define me; they refine me.",
    "I show up even when it feels hard.",
    "I am learning to trust the process.",
    "I am more powerful than my doubts.",
    "I release the need to compare myself to others.",
    "I am becoming more disciplined every day.",
    "I am allowed to take breaks without guilt.",
    "I am worthy of success and happiness.",
    "I can figure things out step by step.",
    "I choose thoughts that support my growth.",
    "I am grounded, centered, and present.",
    "I am capable of finishing what I start.",
    "I am learning to be comfortable outside my comfort zone.",
    "I am worthy of the goals I dream about.",
    "I believe in my ability to adapt and improve.",
    "I choose courage instead of fear.",
    "I honor my limits and listen to my body.",
    "I am building habits that support my best self.",
    "I am patient with my timeline and persistent with my effort.",
    "I am grateful for the chance to try again today.",
    "I am enough exactly as I am, and I am still growing.",
    "I can take things one step, one task, one moment at a time.",
    "I am in charge of how I respond to challenges.",
    "I release perfection and embrace progress.",
    "I am moving closer to my goals every single day.",
    "I respect myself, my time, and my energy."
];

/***********************
 * DOM ELEMENTS
 ***********************/
const quoteEl = document.getElementById("quote");
const quoteAuthorEl = document.getElementById("quoteAuthor");
const quoteCategoryEl = document.getElementById("quoteCategory");
const metaEl = document.getElementById("quoteMeta");

const newQuoteBtn = document.getElementById("newQuoteBtn");
const favoriteBtn = document.getElementById("favoriteBtn");
const favoritesListEl = document.getElementById("favoritesList");
const themeToggleBtn = document.getElementById("themeToggle");
const shareBtn = document.getElementById("shareBtn");
const resetBtn = document.getElementById("resetBtn");
const typeFilterSelect = document.getElementById("typeFilter");

const affirmationDisplayEl = document.getElementById("affirmationDisplay");
const getAffirmationBtn = document.getElementById("getAffirmationBtn");
const affirmationInput = document.getElementById("affirmationInput");
const saveAffirmationBtn = document.getElementById("saveAffirmationBtn");

/***********************
 * STATE
 ***********************/
let lastQuoteIndex = null;
const seenQuotes = new Set();
let currentQuote = null;
let favorites = [];

let userAffirmations = [];
let lastAffirmationIndex = null;
let currentFilter = "all";

/***********************
 * THEME (DARK/LIGHT)
 ***********************/
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

/***********************
 * UTILITIES
 ***********************/
function todayKey() {
    const d = new Date();
    return d.toISOString().slice(0, 10);
}

function updateMeta() {
    metaEl.textContent = `You’ve seen ${seenQuotes.size} of ${quotes.length} quotes.`;
}

function getFilteredQuoteIndices() {
    if (currentFilter === "all") {
        return quotes.map((_, idx) => idx);
    }
    return quotes
        .map((q, idx) => ({ q, idx }))
        .filter(item => item.q.category === currentFilter)
        .map(item => item.idx);
}

function getRandomIndexFromList(list, excludeIndex = null) {
    if (list.length === 0) return null;
    if (list.length === 1) return list[0];

    let index;
    do {
        const pos = Math.floor(Math.random() * list.length);
        index = list[pos];
    } while (index === excludeIndex);

    return index;
}

/***********************
 * QUOTE LOGIC
 ***********************/
function setQuoteByIndex(index) {
    if (index === null || index === undefined || !quotes[index]) return;

    const quoteObj = quotes[index];
    currentQuote = quoteObj;
    lastQuoteIndex = index;

    quoteEl.classList.add("fade-out");
    setTimeout(() => {
        quoteEl.textContent = quoteObj.text;
        quoteAuthorEl.textContent = `— ${quoteObj.author}`;
        quoteCategoryEl.textContent = `Type: ${quoteObj.category}`;
        quoteEl.classList.remove("fade-out");
    }, 300);
}

function showQuoteOfTheDay() {
    const key = todayKey();
    const stored = localStorage.getItem("quoteOfTheDay");

    if (stored) {
        try {
            const parsed = JSON.parse(stored);
            if (parsed.date === key && typeof parsed.index === "number") {
                if (quotes[parsed.index]) {
                    seenQuotes.add(parsed.index);
                    updateMeta();
                    setQuoteByIndex(parsed.index);
                    return;
                }
            }
        } catch (e) {
            // ignore parse errors
        }
    }

    const allIndices = quotes.map((_, idx) => idx);
    const index = getRandomIndexFromList(allIndices, null);
    seenQuotes.add(index);
    updateMeta();
    setQuoteByIndex(index);

    localStorage.setItem(
        "quoteOfTheDay",
        JSON.stringify({ date: key, index })
    );
}

function showNewQuote() {
    const candidates = getFilteredQuoteIndices();
    const index = getRandomIndexFromList(candidates, lastQuoteIndex);

    if (index === null) {
        alert("No quotes found for this type. Try another filter.");
        return;
    }

    seenQuotes.add(index);
    updateMeta();
    setQuoteByIndex(index);
}

/***********************
 * FAVORITES
 ***********************/
function loadFavorites() {
    const stored = localStorage.getItem("favoriteQuotes");
    if (stored) {
        try {
            favorites = JSON.parse(stored);
        } catch {
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
        span.textContent = fav;

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

    const favString = `"${currentQuote.text}" — ${currentQuote.author} [${currentQuote.category}]`;
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

/***********************
 * SHARE
 ***********************/
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

    if (navigator.share) {
        navigator
            .share({
                title: "Stoic Motivation",
                text: shareText,
                url: window.location.href
            })
            .catch(() => {});
        return;
    }

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

    fallbackPromptShare();
}

/***********************
 * TYPE FILTER
 ***********************/
function initTypeFilter() {
    const categories = Array.from(
        new Set(quotes.map(q => q.category))
    ).sort();

    categories.forEach(cat => {
        const opt = document.createElement("option");
        opt.value = cat;
        opt.textContent = cat[0].toUpperCase() + cat.slice(1);
        typeFilterSelect.appendChild(opt);
    });

    typeFilterSelect.addEventListener("change", () => {
        currentFilter = typeFilterSelect.value;
        showNewQuote();
    });
}

/***********************
 * AFFIRMATIONS
 ***********************/
function loadUserAffirmations() {
    const stored = localStorage.getItem("userAffirmations");
    if (stored) {
        try {
            userAffirmations = JSON.parse(stored);
        } catch {
            userAffirmations = [];
        }
    }
}

function saveUserAffirmations() {
    localStorage.setItem("userAffirmations", JSON.stringify(userAffirmations));
}

function getAllAffirmations() {
    // built-in + user-created
    return builtInAffirmations.concat(userAffirmations);
}

function showRandomAffirmation() {
    const all = getAllAffirmations();
    if (all.length === 0) {
        affirmationDisplayEl.textContent = "No affirmations available yet.";
        return;
    }

    const indices = all.map((_, idx) => idx);
    const index = getRandomIndexFromList(indices, lastAffirmationIndex);
    lastAffirmationIndex = index;

    const text = all[index];

    affirmationDisplayEl.classList.add("fade-out");
    setTimeout(() => {
        affirmationDisplayEl.textContent = text;
        affirmationDisplayEl.classList.remove("fade-out");
    }, 300);
}

function saveNewAffirmation() {
    const text = affirmationInput.value.trim();
    if (!text) return;

    userAffirmations.push(text);
    saveUserAffirmations();
    affirmationInput.value = "";
    alert("Your affirmation has been saved and will appear in the pool.");
}

/***********************
 * RESET
 ***********************/
function resetApp() {
    const confirmed = window.confirm(
        "This will clear your favorites, affirmations, quote of the day, theme, and filters. Continue?"
    );
    if (!confirmed) return;

    localStorage.removeItem("favoriteQuotes");
    localStorage.removeItem("userAffirmations");
    localStorage.removeItem("quoteOfTheDay");
    localStorage.removeItem("theme");

    favorites = [];
    userAffirmations = [];
    seenQuotes.clear();
    currentQuote = null;
    lastQuoteIndex = null;
    lastAffirmationIndex = null;

    currentFilter = "all";
    typeFilterSelect.value = "all";

    applyTheme("light");
    renderFavorites();

    quoteEl.textContent = "Click “New Quote” for inspiration.";
    quoteAuthorEl.textContent = "— Author";
    quoteCategoryEl.textContent = "Type: —";
    affirmationDisplayEl.textContent = "Click “Get Affirmation” to see one.";

    updateMeta();
}

/***********************
 * EVENT LISTENERS & INIT
 ***********************/
newQuoteBtn.addEventListener("click", showNewQuote);
favoriteBtn.addEventListener("click", addCurrentToFavorites);
themeToggleBtn.addEventListener("click", toggleTheme);
shareBtn.addEventListener("click", shareQuote);
resetBtn.addEventListener("click", resetApp);

getAffirmationBtn.addEventListener("click", showRandomAffirmation);
saveAffirmationBtn.addEventListener("click", saveNewAffirmation);

loadTheme();
initTypeFilter();

loadFavorites();
renderFavorites();

loadUserAffirmations();
updateMeta();
showQuoteOfTheDay();
