function generateQuote(){
    var quotes = {
        "― Jules Renard": '"The truly free man is the one who can turn down an invitation to dinner without giving an excuse."',
        "― Albert Einstein": '"Our task must be to free ourselves... by widening our circle of compassion to embrace all living creatures and the whole of nature and its beauty."',
        "― Lana Del Rey": '"Are you in touch with all of your darkest fantasies? Have you created a life for yourself where you can experience them?"',
        "― Pierce Brown": '"The truly free man is the one who can turn down an invitation to dinner without giving an excuse."'
    }

    var authors = Object.keys(quotes);

    author = authors[Math.floor(Math.random() * authors.length)];

    var quote = quotes[author];

    document.getElementById("quote").innerHTML = quote;

    document.getElementById("author").innerHTML = author;
}