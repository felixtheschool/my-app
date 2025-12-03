const quotes = [
    "You are capable of amazing things.",
    "Small steps every day lead to big results.",
    "Believe you can and you're halfway there.",
    "Dream it. Wish it. Do it.",
    "Success is not final; failure is not fatal."
];

document.getElementById("newQuoteBtn").addEventListener("click", () => {
    const quoteEl = document.getElementById("quote");
    const randomIndex = Math.floor(Math.random() * quotes.length);
    quoteEl.textContent = quotes[randomIndex];
});
