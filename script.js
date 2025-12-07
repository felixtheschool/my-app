//import quotes from other files load.

const quotes = quotesArray;
const affirmations = affirmationsArray;
//globa var for array function
let affirmElIndex = 0;
let affirmElLength = 0;

// Elements
const quoteEl = document.getElementById("quote");
//affirmation el
const affirmEl = document.getElementById("modal-affirmation-content");
const metaEl = document.getElementById("quoteMeta");
const newQuoteBtn = document.getElementById("newQuoteBtn");
//affirmation constant
const affirmationBtn = document.getElementById("affirmationBtn");
const favoriteBtn = document.getElementById("favoriteBtn");
const favoritesListEl = document.getElementById("favoritesList");
const themeToggleBtn = document.getElementById("themeToggle");
const shareBtn = document.getElementById("shareBtn");

// State
let lastIndex = null;
const seenQuotes = new Set();
let currentQuoteText = quoteEl.textContent;
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
// load stored theme
function loadTheme() {
    const stored = localStorage.getItem("theme");
    if (stored === "dark" || stored === "light") {
        applyTheme(stored);
    } else {
        applyTheme("light");
    }
}
//change theme
function toggleTheme() {
    const isDark = document.body.classList.contains("dark");
    const newTheme = isDark ? "light" : "dark";
    applyTheme(newTheme);
    localStorage.setItem("theme", newTheme);
}

// ---- Helpers ----
//get todays date
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

function setQuote(text, index = null) {
    lastIndex = index;
    //fade out the quote
    quoteEl.classList.add("fade-out");
    //remove animate tag if it exists
    quoteEl.classList.remove('animate');
    //add a delay before next quote appears
    setTimeout(() => {
        //set content to next quote
        quoteEl.textContent = text;
        currentQuoteText = text;
        //make visible
        quoteEl.classList.remove("fade-out");
        //trigger reflow to restart animation
        void quoteEl.offsetWidth;
        //add animate to class to add the animation back to the text
        quoteEl.classList.add('animate');
        
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

    // New day or invalid stored data
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

// Button: random new quote (not limited to 1/day)
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

// ---- Share ----
//falback function for if the copy to clipboard fails
function fallbackPromptShare() {
    // Basic fallback: show the quote in a prompt the user can copy from
    window.prompt("Copy this quote:", `"${currentQuoteText}"`);
}
//basic cop to clipboard function
function shareQuote() {
    //null if empty
    const text = currentQuoteText && currentQuoteText.trim();
    //catch if null or if default
    if (!text || text === "Click the button for inspiration!") {
        alert("Get a quote first, then share it!");
        return;
    }
    //remove via daily motivation from text quote end.
    const shareText = `"${text}" — via Daily Motivation`;

    // Modern browsers (especially mobile) navigator api.
    if (navigator.share) {
        navigator
            .share({
                title: "Daily Motivation",
                text: shareText,
                url: window.location.href
            })
            .catch(() => {
                // user cancelled or share failed – silently ignore
            });
        return;
    }

    // Clipboard API fallback, this seems to work with firefox.
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

    // Old browsers - display the quote and get them to copy it manually......
    fallbackPromptShare();
}


///////////////////////////////////////////////////////////
///
//affirmatin functions


//affirmation modal
//modal closer event listeners:
 document.querySelector('.close-modal').addEventListener('click', () => {
            closeModal();
        });
//had to remove close modal trigger for clicking outside the div BECAUSE SPACE BAR COUNTS AS A CLICK??

//show modal function
function showAffirmationModal() {
    const modal = document.getElementById('affirmation-modal');
    modal.style.display = 'block';
}
//close modal function
function closeModal() {
    affirmEl.innerHTML = '';
    //fade out the quote
    affirmEl.classList.add("fade-out");
    //remove animate tag if it exists
    affirmEl.classList.remove('animate');
        document.getElementById('affirmation-modal').style.display = 'none';
    }

//get random index for affirmation selection from list
function getRandomAffirmationsIndex(excludeIndex = null) {
    if (affirmations.length === 1) return 0;

    let index;
    do {
        index = Math.floor(Math.random() * affirmations.length);
    } while (index === excludeIndex);

    return index;
}
//set the next affirmation
function setAffirmation(text, index = null) {
    lastIndex = index;
    
    //add a delay before next quote appears
    setTimeout(() => {
        //set content to next quote
        affirmEl.textContent = text;
        
        //make visible
        affirmEl.classList.remove("fade-out");
       //trigger animation
       affirmationAnimationStart();
        
    }, 300);   

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
    const index = getRandomAffirmationsIndex(lastIndex);
    //get the afformation of the corresponding index
    const text = affirmations[index]; 
    
   affirmationSplitAndSet(text);
    //set the affirmation element;
    //belowcommented for testing
    //setAffirmation(text, index);
    showAffirmationModal();
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
            affirmEl.innerHTML += `<p id=${i}>&nbsp;</p>`
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
document.body.addEventListener('keydown', (key) => {
    console.log(key.key);
    const currentLetter = document.getElementById(affirmElIndex)
    if (currentLetter.innerHTML == key.key) {
        currentLetter.style.color = "white";
        currentLetter.style.backgroundColor = "blue";
        if (affirmElIndex == (affirmElLength - 1)){
            setTimeout(() => {
        
                closeModal();
        
            }, 300);   
            
        }
        affirmElIndex++;
    } 
    if (key.code == 'Space' && currentLetter.text == null) {
        console.log("space pressed");
        currentLetter.style.backgroundColor = "blue";
        affirmElIndex++;
    }
    
});


// ---- Init ----
newQuoteBtn.addEventListener("click", showNewQuote);
favoriteBtn.addEventListener("click", addCurrentToFavorites);
themeToggleBtn.addEventListener("click", toggleTheme);
//sharebtn
shareBtn.addEventListener("click", shareQuote);
//affirmation
affirmationBtn.addEventListener("click", showNewAffirmation);

loadTheme();
loadFavorites();
renderFavorites();
updateMeta();
showQuoteOfTheDay();
closeModal();