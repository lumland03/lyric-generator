console.log('👍 JS Connected');

// Tailwind Background Utlities
const backgrounds = ["bg-gradient-to-r from-emerald-400 to-cyan-400", "bg-gradient-to-tr from-red-400 via-yellow-600 to-yellow-300", "bg-gradient-to-br from-slate-900 via-sky-900 to-slate-700", "bg-gradient-to-br from-zinc-900 via-cyan-600 to-blue-900", "bg-gradient-to-r from-cyan-500 to-blue-500", "bg-gradient-to-r from-emerald-500 to-emerald-900", "bg-gradient-to-br from-red-300 via-fuchsia-600 to-amber-300", "bg-gradient-to-tr from-rose-300 to-orange-600" ,];

// Sample design quotes JSON data
const quotes = [
  {
    quote: "And I've had recurring nightmares that I was loved for who I am, and missed the opportunity to be a better man.",
    author: 'Muse, "Hoodoo"',
    // background: "bg-[url(./assets/hoodoo.png)] bg-contain bg-center" 
    
  },
  {
    quote: "Oh my love was punished long ago, it took the death of hope to let you go.",
    author: 'Slipknot, "Snuff"',
    // background: "bg-[url(./assets/snuff.png)] bg-contain bg-center "
    
  },
  {
    quote: "Now I think I understand how this world can overcome a man.",
    author: 'Avenged Sevenfold, "Fiction"',
    // background: "bg-[url(./assets/fiction.png)] bg-contain bg-center backdrop-blur-md"
   
  },
  {
    quote: "He who makes a beast out of himself gets rid of the pain of being a man.",
    author: 'Avenged Sevenfold, "Bat Country"',
    // background: "bg-[url(./assets/batCountry.png)] bg-contain bg-center "
   
  },
  {
    quote: "Only you can save me from my lack of self control.",
    author: 'Linkin Park, "Good Things Go"',
    // background: "bg-[url(./assets/goodThings.png)] bg-conatin bg-center "
    
  },
  {
    quote: "I must've called a thousand times to tell you I'm sorry for everything that I've done.",
    author: 'Adele, "Hello"',
    // background: "bg-[url(./assets/hello.png)] bg-contain bg-center"
    
  },
  {
    quote: "May I stand unshaken amid, amidst a crashing world?",
    author: 'D’Angelo, "Unshaken"',
    // background: "bg-[url(./assets/unshaken.png)] bg-contain bg-center"
    
  },
  {
    quote: "Oh Lord I'm still not sure what I stand for.",
    author: 'fun., "Some Nights"',
    // background: "bg-[url(./assets/someNights.png)] bg-contain bg-center"
    
  },
  {
    quote: "There shouldn't be this radio silence, but what are the options when someone great is gone?",
    author: 'LCD Soundsystem, "Someone Great"',
    // background: "bg-[url(./assets/someoneGreat.png)] bg-contain bg-center"
    
  },
  {
    quote: "Don't hold on to the past it's a gas mask.",
    author: 'Rare Americans, "Gas Mask"',
    // background: "bg-[url(./assets/gasMask.png)] bg-contain bg-center"
    
  },
  {
    quote: "Momma said there ain't nothing else to talk about, better go in that ring and knock 'em out or you better not come out.",
    author: 'Eminem "Asshole"',
    // background: "bg-[url(./assets/asshole.png)] bg-contain bg-center"
    
  },
  {
    quote: "People don't usually come back this way. From a place that was dark as I was in just to get to this place. Now let these words be like a switchblade to a hater's ribcage.",
    author: 'Bad Meets Evil, "Lighters"',
    // background: "bg-[url(./assets/lighters.png)] bg-contain bg-center"
    
  },
  {
    quote: "Don't mourn for me, you're not the one to place the blame. As bottles call my name, I won't see you tonight.",
    author: 'Avenged Sevenfold, "I Won’t See You Tonight"',
    // background: "bg-[url(./assets/seeYouTonight.png)] bg-contain bg-center"
    
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
  const newBackground = backgrounds[randomBgIndex];
  // const newBackground = selectedQuote.background;
  // Replace entire class attribute
  body.className = `${newBackground} min-h-screen flex items-center justify-center transition-all duration-700`;
}

// Add event listener to button
refreshBtn.addEventListener("click", getRandomQuote);
