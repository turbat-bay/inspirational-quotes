const quote = require('inspirational-quotes');

const randomQuote = quote.getQuote();

console.log("Quote:", randomQuote.text);
console.log("Author:", randomQuote.author);
