console.log('👍 JS Connected');

// Tailwind Background Utlities
const backgrounds = ["bg-red-300", "bg-green-300", "bg-blue-600  bg-emerald-300"];

// Sample design quotes JSON data
const quotes = [
  {
    quote: "And I've had recurring nightmares that I was loved for who I am, and missed the opportunity to be a better man.",
    author: "Hoodoo, Muse"
  },
  {
    quote: "Oh my love was punished long ago, it took the death of hope to let you go",
    author: "Snuff, Slipknot"
  },
  {
    quote: "Now I think I understand how this world can overcome a man",
    author: "Fiction, Avenged Sevenfold"
  }
];

// Get DOM elements
const body = document.querySelector("#body");
const quoteText = document.querySelector("#quote-text");
const quoteAuthor = document.querySelector("#quote-author");
const refreshBtn = document.querySelector("#refresh-btn");

// Function to get random quote and background
function getRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const selectedQuote = quotes[randomIndex];

  // Update quote
  quoteText.textContent = `"${selectedQuote.quote}"`;
  quoteAuthor.textContent = `— ${selectedQuote.author}`;

  // Get random background
  const randomBgIndex = Math.floor(Math.random() * backgrounds.length);
  const newBackground = backgrounds[randomBgIndex];

  // Replace entire class attribute
  body.className = `${newBackground} min-h-screen flex items-center justify-center transition-all duration-700`;
}

// Add event listener to button
refreshBtn.addEventListener("click", getRandomQuote);
