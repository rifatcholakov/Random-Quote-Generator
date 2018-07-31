// Collection of quotes
const quotes = [
    { quote: "Everything in life is a sale and everything you want is a commision", source: "Grant Cardone", tags: ["business"]},
    { quote: "If you chase after two rabbits, you catch none.", source: "Chinese Proverb", tags: ["life"]},
    { quote: "The biggest tragedy in life, is being good at the wrong thing.", source: "Joel Salatin"},
    { quote: "Quotes could save your life.", source: "Tai Lopez", tags: ["business", "funny"]},
    { quote: "The most important single ingredient in the formula of success is knowing how to get along with people", source: "Theodore Roosevelt"},
    { quote: "Be quick, but never hurry.", source: "John wooden UCLA Basketball coach"},
    { quote: "Why so serious?", source: "Joker", citation: "The Dark Knight", year: "2008", tags: ["funny", "movies"]},
    { quote: "May the Force be with you.", source: "Obi-Wan Kenobi", citation: "Star Wars", year: "1977"},
    { quote: "You are ambitious, which, within reasonable bounds, does good rather than harm.", source: "Abraham Lincoln", citation: "Letter to Joseph Hooker", tags: ["politics"]},
    { quote: "Every failure is a step to success.", source: "William Whewell", year: "2006", tags: ["business", "life"]}
];

// Collection of colors
const colors = ["#FFDC00", "#111111", "#F012BE", "#39CCCC", "#7FDBFF", "#0074D9", "#001f3f", "#FF851B", "#85144b", "#DDDDDD"];

// Getting a random value
function getRandomValue(array) {
    // Generate a random number from 0-9
    randomNumber = Math.floor(Math.random() * 10);

    return array[randomNumber];
}

// Rendering the quote to the screen
function printQuote() {
    // Getting the current random quote;
    let currentQuote = getRandomValue(quotes);
    let currentColor = getRandomValue(colors);

    //Add the quote and it's properties to the template
    let template = `
    <p class="quote">${currentQuote.quote} </p>
    <p class="source">${currentQuote.source}
    `;

    if(currentQuote.citation) {
        template += `<span class="citation">${currentQuote.citation}</span>`;
    }

    if(currentQuote.year) {
        template += `<span class="year">${currentQuote.year}</span>`
    }

    if(currentQuote.tags) {
        template += `<span class="tags">&nbsp;[${currentQuote.tags.join(", ")}]</span>`;
    }

    template += "</p>";

    //Set the html to the template
    document.getElementById('quote-box').innerHTML = template;

    // Set the "Show another quote" button backrgound color to the random color
    document.getElementById("loadQuote").style.backgroundColor = currentColor;

    //Set the backrgound-color to the random color
    document.body.style.backgroundColor = currentColor;

    // Restart the timer
    clearInterval(timer);
    timer = setInterval(printQuote, 30000);
}


// This event listener will respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

// Start a 30sec timer which changes the quotes
var timer = setInterval(printQuote, 30000);