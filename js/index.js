const quoteContainer = document.getElementById("quote-container");
const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");
const githubButton = document.getElementById("github");
const newQuoteButton = document.getElementById("new-quote");
const loader = document.getElementById("loader");
let apiQuotes = [];

function showLoadingSpinner() {
  loader.hidden = false;
  quoteContainer.hidden = true;
}

function removeLoadingSpinner() {
  quoteContainer.hidden = false;
  loader.hidden = true;
}

// Show new quote
function newQuote() {
  showLoadingSpinner();
  //Pick a random quote for apiQuotes array
  const randonQuote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
  // Check if author field is blank or not
  if (!randonQuote["author"]) {
    authorText.textContent = "Unknown";
  } else {
    authorText.textContent = randonQuote["author"];
  }
  // Check the randonQuote length to determine font size.
  if (randonQuote["text"].length > 100) {
    quoteText.classList.add("long-quote");
  } else {
    quoteText.classList.remove("long-quote");
  }
  // Set Quote, Hide loader
  quoteText.textContent = randonQuote["text"];
  removeLoadingSpinner();
}

// Go to Github page (Basic funtionality To be changed in future)
function githubPage() {
  window.open("https://github.com/badal-kumar-sah", "blank");
}
// Event Listener
newQuoteButton.addEventListener("click", newQuote);
githubButton.addEventListener("click", githubPage);

// Get Quotes From API
async function getQuotes() {
  showLoadingSpinner();
  const apiUrl = "https://type.fit/api/quotes";
  try {
    const response = await fetch(apiUrl);
    apiQuotes = await response.json();
    // console.log(apiQuotes[12]);
    newQuote();
  } catch (error) {}
}

// On load
getQuotes();

// // author, quote, 2 buttons

// const quoteContainer = document.getElementById("quote-container");
// const quoteText = document.getElementById("quote");
// const authorText = document.getElementById("author");
// const githubButton = document.getElementById("github");
// const newQuoteButton = document.getElementById("new-quote");
// const loader = document.getElementById("loader");

// let apiQuotes = [];
// function newQuote() {
//   loading();
//   const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
//   if (!quote["author"]) {
//     authorText.textContent = "Unknown";
//   } else {
//     authorText.textContent = quote["author"];
//   }
//   if (quote["text"].length > 120) {
//     quoteText.classList.add("long-quote");
//   }
//   quoteText.textContent = quote["text"];
//   removeLoadingSpinner();
// }

// function loading() {
//   loader.hidden = false;
//   quoteContainer.hidden = true;
// }
// function complete() {
//   loader.hidden = true;
//   quoteContainer.hidden = false;
// }

// function github() {
//   window.open("https://github.com/badal-kumar-sah", "blank");
// }

// newQuoteButton.addEventListener("click", newQuote);
// githubButton.addEventListener("click", github);

// async function getQuotes() {
//   loading();
//   const apiUrl = "https://type.fit/api/quotes";
//   try {
//     const response = await fetch(apiUrl);
//     apiQuotes = await response.json();
//     newQuote();
//   } catch (error) {}
// }

// getQuotes();
