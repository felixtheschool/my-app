// ====================
// STOIC QUOTE POOL
// ====================
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

// ====================
// AFFIRMATION POOL (50)
// ====================
const affirmationPool = [
    "I am capable of handling whatever comes my way.",
    "I choose to focus on what I can control.",
    "I am growing stronger and wiser every day.",
    "I am worthy of love, success, and inner peace.",
    "I learn from my challenges and move forward.",
    "I am proud of how far I have come.",
    "I allow myself to make mistakes and grow from them.",
    "I bring value to the people around me.",
    "I deserve time to rest and recharge.",
    "I am becoming the best version of myself.",
    "I let go of what I cannot change.",
    "I speak kindly to myself.",
    "I am patient with my journey.",
    "I am allowed to take up space.",
    "I am resilient and can rise after any setback.",
    "I trust myself to make good decisions.",
    "I am grateful for the lessons life gives me.",
    "I believe in my ability to figure things out.",
    "I am stronger than my doubts.",
    "I can create the future I want.",
    "I am doing my best, and that is enough.",
    "I choose progress over perfection.",
    "I am allowed to start again.",
    "I am worthy of good things.",
    "I am calm, centered, and in control of my responses.",
    "I bring creativity and curiosity to what I do.",
    "I am learning to be kind to myself.",
    "I am brave enough to try new things.",
    "I am in charge of how I show up today.",
    "I am worthy of respect, including from myself.",
    "I release worry and invite peace.",
    "I choose thoughts that support and empower me.",
    "I am open to new possibilities.",
    "I am grateful for the progress I’ve already made.",
    "I am building habits that support my goals.",
    "I forgive myself for past mistakes.",
    "I am enough exactly as I am, while still growing.",
    "I trust the timing of my life.",
    "I am learning something valuable every day.",
    "I am steady, even when things feel uncertain.",
    "I welcome change as an opportunity to grow.",
    "I am allowed to set boundaries that protect my peace.",
    "I am capable of creating positive change.",
    "I handle difficulties with courage and grace.",
    "I am proud of myself for not giving up.",
    "I am becoming more confident in my abilities.",
    "I choose to be present in this moment.",
    "I am grateful for my body, mind, and spirit.",
    "I am worthy of my dreams.",
    "I am exactly where I need to be right now."
];

// ====================
// DOM ELEMENTS
// ====================
//============
//DISPLAY ELEMENTS
//constant for quote display element
const quoteEl = document.getElementById("quote");
//constat for quote author element
const quoteAuthorEl = document.getElementById("quoteAuthor");
//constant for quote category element.
const quoteCategoryEl = document.getElementById("quoteCategory");
//tracker for number of quotes seen out of total.
const metaEl = document.getElementById("quoteMeta");

// ======================
//button elements
const newQuoteBtn = document.getElementById("newQuoteBtn");
const favoriteBtn = document.getElementById("favoriteBtn");
const favoritesListEl = document.getElementById("favoritesList");
const themeToggleBtn = document.getElementById("themeToggle");
const shareBtn = document.getElementById("shareBtn");
const resetBtn = document.getElementById("resetBtn");
const typeFilterSelect = document.getElementById("typeFilter");

const affirmationDisplayEl = document.getElementById("affirmationDisplay");
const getAffirmationBtn = document.getElementById("getAffirmationBtn");

// ====================
// STATE
// ====================
let lastQuoteIndex = null;
const seenQuotes = new Set();
let currentQuote = null;
let favorites = [];
let currentFilter = "all";

let lastAffirmationIndex = null;

// ====================
// THEME / DARK MODE
// ====================
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

// ====================
// QUOTE HELPERS
// ====================
function todayKey() {
    const d = new Date();
    console.log(d.toISOString().slice(0, 10));
    return d.toISOString().slice(0, 10);
}

function updateMeta() {
    metaEl.textContent = `You’ve seen ${seenQuotes.size} of ${quotes.length} quotes.`;
}

function getFilteredIndices() {
    if (currentFilter === "all") {
        return quotes.map((_, idx) => idx);
    }
    return quotes
        .map((q, idx) => ({ q, idx }))
        .filter(item => item.q.category === currentFilter)
        .map(item => item.idx);
}

function getRandomQuoteIndex(excludeIndex = null) {
    const candidates = getFilteredIndices();
    if (candidates.length === 0) return null;
    if (candidates.length === 1) return candidates[0];

    let index;
    do {
        const randomPos = Math.floor(Math.random() * candidates.length);
        index = candidates[randomPos];
    } while (index === excludeIndex);

    return index;
}

function setQuoteByIndex(index) {
    if (index === null || index === undefined || !quotes[index]) return;

    const q = quotes[index];
    currentQuote = q;
    lastQuoteIndex = index;

    quoteEl.classList.add("fade-out");
    
    setTimeout(() => {
        quoteEl.textContent = q.text;
        quoteAuthorEl.textContent = `— ${q.author}`;
        quoteCategoryEl.textContent = `Type: ${q.category}`;
        quoteEl.classList.remove("fade-out");
         //trigger reflow to restart animation
        
        
    }, 300);
}

// ====================
// QUOTE OF THE DAY
// ====================
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
                    updateMeta();
                    setQuoteByIndex(index);
                    return;
                }
            }
        } catch (e) {
            // ignore parse error
        }
    }

    // New day or invalid data → pick from all quotes
    const allIndices = quotes.map((_, idx) => idx);
    const randomPos = Math.floor(Math.random() * allIndices.length);
    const index = allIndices[randomPos];

    seenQuotes.add(index);
    updateMeta();
    setQuoteByIndex(index);

    localStorage.setItem("quoteOfTheDay", JSON.stringify({ date: key, index }));
}

// ====================
// NEW QUOTE BUTTON
// ====================
function showNewQuote() {
    const index = getRandomQuoteIndex(lastQuoteIndex);
    if (index === null) {
        alert("No quotes found for this type. Try another filter.");
        return;
    }

    seenQuotes.add(index);
    updateMeta();
    setQuoteByIndex(index);
}

// ====================
// FAVORITES
// ====================
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
        li.textContent = "No favorites yet. Save a quote you like!";
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
    if (!currentQuote) {
        alert("Get a quote first, then save it.");
        return;
    }

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

// ====================
// SHARE QUOTE
// ====================
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

// ====================
// TYPE FILTER
// ====================
function initTypeFilter() {
    const categories = Array.from(new Set(quotes.map(q => q.category))).sort();
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

// ====================
// AFFIRMATION POOL LOGIC
// ====================
function getRandomAffirmationIndex(exclude = null) {
    if (affirmationPool.length === 0) return null;
    if (affirmationPool.length === 1) return 0;

    let index;
    do {
        index = Math.floor(Math.random() * affirmationPool.length);
    } while (index === exclude);

    return index;
}

function showAffirmation() {
    const index = getRandomAffirmationIndex(lastAffirmationIndex);
    if (index === null) return;

    lastAffirmationIndex = index;
    affirmationDisplayEl.textContent = affirmationPool[index];
}

// ====================
// RESET APP
// ====================
function resetApp() {
    const confirmed = window.confirm(
        "This will clear your favorites, theme, and quote-of-the-day history. Continue?"
    );
    if (!confirmed) return;

    localStorage.removeItem("favoriteQuotes");
    localStorage.removeItem("quoteOfTheDay");
    localStorage.removeItem("theme");
    // legacy keys (if any)
    localStorage.removeItem("affirmations");
    localStorage.removeItem("lastQuote");

    favorites = [];
    seenQuotes.clear();
    currentQuote = null;
    lastQuoteIndex = null;
    lastAffirmationIndex = null;

    currentFilter = "all";
    typeFilterSelect.value = "all";

    applyTheme("light");
    renderFavorites();
    updateMeta();

    quoteEl.textContent = 'Click "New Quote" or wait for Quote of the Day.';
    quoteAuthorEl.textContent = "—";
    quoteCategoryEl.textContent = "Type: —";

    affirmationDisplayEl.textContent = 'Click "Get Affirmation" to see one.';
}

// =======================
//popup affirmations stuff
// ================

//globa var for array function
let affirmElIndex = 0;
let affirmElLength = 0;
//affirmation element
const affirmEl = document.getElementById("modal-affirmation-content");
//affirmation button
const affirmationBtn = document.getElementById("affirmationBtn");
const closeModalBtn = document.getElementById("closeModal");
///////////////////////////////////////////////////////////
///
//affirmatin functions
const affirmations = affirmationPool;

function showAffirmationModal() {
    const modal = document.getElementById('affirmation-modal');
    modal.style.display = 'block';
}
//modal closer event listeners:

closeModalBtn.addEventListener("click", closeModal);
//close modal function
function closeModal() {
    affirmEl.innerHTML = '';
    //fade out the quote
    affirmEl.classList.add("fade-out");
    //remove animate tag if it exists
    affirmEl.classList.remove('animate');
        document.getElementById('affirmation-modal').style.display = 'none';
        //re-add event listener to affirmation button
        affirmationBtn.addEventListener("click", showNewAffirmation);
    }

//get random index for affirmation selection from list
function getRandomAffirmationsIndex() {
    console.log('starting index');
    if (affirmations.length === 1) return 0;

    let index;
    
    index = Math.floor(Math.random() * affirmations.length);
    

    return index;
}

//affirmation animations!!!
function affirmationAnimationStart() {
    //trigger reflow to restart animation
    void affirmEl.offsetWidth;
    //add animate to class to add the animation back to the text
    affirmEl.classList.add('animate');
}
//set new affirmation
function showNewAffirmation() {
    console.log("showing new affirmation");
    //get a random index from within the affirmation array that is not null
    const index = getRandomAffirmationsIndex();
    console.log(index);
    //get the afformation of the corresponding index
    const text = affirmations[index]; 
    
   affirmationSplitAndSet(text);
    //set the affirmation element;
    //belowcommented for testing
    //setAffirmation(text, index);
    showAffirmationModal();

    //remove event listener so that pressing space will NOT recast the event
    affirmationBtn.removeEventListener("click", showNewAffirmation);
    
    
}

function affirmationSplitAndSet(text) {
    //set innerhtml of the div to empty
    affirmEl.innerHTML = '';
    //split the string into an array of characters
     const textArray = text.split('');
     console.log(textArray);
     //loop through the array, adding each char as a p element with an id to the content
     for (const i in textArray) {
        if (textArray[i] == ' ') {
            affirmEl.innerHTML += `<p id=${i} class='affirmElement'>&nbsp;</p>`
        } else {
            affirmEl.innerHTML += `<p id=${i}>${textArray[i]}</p>`
        }
        
     }
     //global var for typing function
     affirmElIndex = 0;
     affirmElLength = textArray.length;
     //start animation
     affirmationAnimationStart();
}

//keypress event listener for anyting in body
document.body.addEventListener('keyup', (key) => {
    console.log(key.key);
    const currentLetter = document.getElementById(affirmElIndex)
    if (currentLetter.innerHTML == key.key) {
        //currentLetter.style.color = "white";
        //currentLetter.style.backgroundColor = "blue";
        //add class for styling
        currentLetter.classList.add("activated");
        //curve left most 
        if (affirmElIndex == 0) {
            currentLetter.style.borderRadius = "5px 0px 0px 5px"
        }
        if (affirmElIndex == (affirmElLength - 1)){
            currentLetter.style.borderRadius = "0px 5px 5px 0px"
            setTimeout(() => {
        
                closeModal();
        
            }, 300);   
            
        }
        affirmElIndex++;
    } 
    if (key.code == 'Space' && currentLetter.innerHTML == '&nbsp;') {
        console.log("space pressed");
        //currentLetter.style.backgroundColor = "blue";
        currentLetter.classList.add("activated");
        affirmElIndex++;
    }
    
});
affirmationBtn.addEventListener("click", showNewAffirmation);






// ====================
// EVENT LISTENERS & INIT
// ====================
newQuoteBtn.addEventListener("click", showNewQuote);
favoriteBtn.addEventListener("click", addCurrentToFavorites);
themeToggleBtn.addEventListener("click", toggleTheme);
shareBtn.addEventListener("click", shareQuote);
resetBtn.addEventListener("click", resetApp);
getAffirmationBtn.addEventListener("click", showAffirmation);

loadTheme();
initTypeFilter();
loadFavorites();
renderFavorites();
updateMeta();
showQuoteOfTheDay();
closeModal();