/*jshint esversion: 6 */

"use strict";

    
// Quote constructor
function Quote(quote, source, tags, citation = null, year = null ) {
    /* jshint validthis: true */
    this.quote = quote;
    this.source = source;
    this.tags = tags;
    this.citation = citation;
    this.year = year;   
}

// Create a random integer between 0 and the upper range passed to function
const getRandomInt = (upperRange) => {
    return Math.floor(Math.random() * upperRange);    
};

const getRandomQuote = () => {
    // Create a random integer inside the range of the quotes array
    let i = getRandomInt(quotes.length);
    // pull the random quote from array
    let quote = quotes[i];
    console.log(quote); // for testing purposes
    return quote;    
};

const printQuote = () => {
    // store the random quote in variable
    const currentQuote = getRandomQuote();
    console.log(currentQuote); // for testing purposes
    // construct the optional span html for citation and year
    let optionalHTML = "";
    if (currentQuote.citation) {
        optionalHTML += createSpan(currentQuote.citation, "citation");
    }
    if (currentQuote.year) {
        optionalHTML += createSpan(currentQuote.year, "year");       
    }

    // create the main html block
    let quoteHtml = `<p class="quote">${currentQuote.quote}</p> 
                     <p class="source">${currentQuote.source}${optionalHTML}</p>`;
       
    // append the html to the current page
    document.getElementById('quote-box').innerHTML = quoteHtml;

    // create a random background color, keep values on darker side for contrast with text
    let backColor = `rgb(${getRandomInt(190)}, ${getRandomInt(190)}, ${getRandomInt(190)})`
    // change the background color
    document.querySelector("body").style.backgroundColor = backColor;


}

// concactenate span html
const createSpan = (text, className) => {
    return '<span class="' + className + '">' + text + '<span>';
};

// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", () => {
    // Clear the timer to avoid instant reset after clicking
    clearInterval(timer);
    printQuote();
    // restart timer
    timer = setInterval(printQuote, 5000);
}, false);
    
// Create an array of quotes
const quotes = [];
quotes.push(new Quote(
    "Glory is fleeting, but obscurity is forever.",
    "Napolean Bonaparte",
    ["Historical", "War", "Leadership"],
    null,
    1812
 ));
 quotes.push(new Quote(
    "You can do anything but not everything.",
    "David Allen",
    ["Philosophical"],
    "Making It All Work",
    2009
));
quotes.push(new Quote(
    "There is nothing permanent except change.",
    "Heraclitus",
    ["Philosophical"],
));
quotes.push(new Quote(
    "Don't cry because it's over, smile because it happened.",
    "Dr. Seuss",
    ["Philosophical, Inspirational"],
));
quotes.push(new Quote(
    "Every artist was first an amateur",
    "Ralph Waldo Emerson",
    ["Art, Inspirational"],
    "Essays: First Series",
    1841
));
quotes.push(new Quote(
    "'Cause you know I love the players, and you love the game.",
    "Taylor Swift",
    ["Pop, Humor"],
    "Blank Space",
    2014
));

// Display intitial quote
printQuote();

// Create 5 second loop
let timer = setInterval(printQuote, 5000);