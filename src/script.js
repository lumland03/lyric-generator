console.log('👍 JS Connected');

// Tailwind Background Utlities
// const backgrounds = ["bg-red-300", "bg-green-300", "bg-blue-600  bg-emerald-300", ];

// Sample design quotes JSON data
const quotes = [
  {
    quote: "And I've had recurring nightmares that I was loved for who I am, and missed the opportunity to be a better man.",
    author: "Hoodoo, Muse",
    background: "bg-[URL(/assets/hoodoo.png)] bg-cover bg-center"
  },
  {
    quote: "Oh my love was punished long ago, it took the death of hope to let you go.",
    author: "Snuff, Slipknot",
    background: "bg-[URL(/assets/snuff.png)] bg-cover bg-center"
  },
  {
    quote: "Now I think I understand how this world can overcome a man.",
    author: "Fiction, Avenged Sevenfold",
    background: "bg-[URl(/assets/fiction.png)] bg-cover bg-center"
  },
  {
    quote: "He who makes a beast out of himself gets rid of the pain of being a man.",
    author: "Bat Country, Avenged Sevenfold",
    background: "bg-[URL(/assets/batCountry.png)] bg-cover bg-center"
  },
  {
    quote: "Only you can save me from my lack of self control.",
    author: "Good Things Go, Linkin Park",
    background: "bg-[URL(/assets/goodThings.png)] bg-cover bg-center"
  },
  {
    quote: "I must've called a thousand times to tell you I'm sorry for everything that I've done.",
    author: "Hello, Adele",
    background: "bg-[URL(/assets/hello.png)] bg-cover bg-center"
  },
  {
    quote: "May I stand unshaken amid, amidst a crashing world?",
    author: "Unshaken, D'Angelo",
    background: "bg-[URL(/assets/unshaken.png)] bg-cover bg-center"
  },
  {
    quote: "Oh Lord I'm still not sure what I stand for.",
    author: "Some Nights, fun.",
    background: "bg-[URL(/assets/someNights.png)] bg-cover bg-center"
  },
  {
    quote: "There shouldn't be this radio silence, but what are the options when someone great is gone?",
    author: "Someone Great, LCD Soundsystem",
    background: "bg-[URL(/assets/someoneGreat.png)] bg-cover bg-center"
  },
  {
    quote: "Don't hold on to the past it's a gas mask.",
    author: "Gas Mask, Rare Americans",
    background: "bg-[URL(/assets/gasMask.png)] bg-cover bg-center"
  },
  {
    quote: "Momma said there ain't nothing else to talk about, better go in that ring and knock 'em out or you better not come out.",
    author: "Asshole, Eminem",
    background: "bg-[URL(/assets/asshole.png)] bg-cover bg-center"
  },
  {
    quote: "People don't usually come back this way. From a place that was dark as I was in just to get to this place. Now let these words be like a switchblade to a hater's ribcage.",
    author: "Lighters, Bad Meets Evil",
    background: "bg-[URL(/assets/lighters.png)] bg-cover bg-center"
  },
  {
    quote: "Don't morn for me, you're not the one to place the blame. As bottles call my name, I won't see you tonight.",
    author: "I Won't See You Tonight part 1, Avenged Sevenfold",
    background: "bg-[URL(/assets/seeYouTonight.png)] bg-cover bg-center"
  },
    
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
  // const newBackground = backgrounds[randomBgIndex];
  const newBackground = selectedQuote.background;
  // Replace entire class attribute
  body.className = `${newBackground} min-h-screen flex items-center justify-center transition-all duration-700`;
}

// Add event listener to button
refreshBtn.addEventListener("click", getRandomQuote);
