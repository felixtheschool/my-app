const quotes = [
    "You are capable of amazing things.",
    "Small steps every day lead to big results.",
    "Believe you can and you're halfway there.",
    "Dream it. Wish it. Do it.",
    "Success is not final; failure is not fatal."
];

const quoteEl = document.getElementById("quote");
const metaEl = document.getElementById("quoteMeta");
const btn = document.getElementById("newQuoteBtn");

let lastIndex = null;
const seenQuotes = new Set();

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

    // Fade out, change text, fade in
    quoteEl.classList.add("fade-out");
    setTimeout(() => {
        quoteEl.textContent = quotes[index];
        quoteEl.classList.remove("fade-out");
    }, 300);
}

btn.addEventListener("click", showNewQuote);

// Initialize meta text
updateMeta();
