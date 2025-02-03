const quotes=[
    {
        quote:"Everything in this life is not easy, but nothing is impossible.",
        author:"Dr.SarangChoi",
    },
    {
        quote:"In this life we cannot do great things. We can only do small things with great love.",
        author:"Mother Teresa",
    },
    {
        quote:"Many of life's failures are people who did not realize how close they were to success when they gave up.",
        author:"Thomas A. Edison",
    },
    {
        quote:"Life is really simple, but we insist on making it complicated.",
        author:"Confucius",
    },
    {
        quote:"Life is a long lesson in humility.",
        author:"James M. Barrie",
    },
    {
        quote:"I find that the harder I work, the more luck I seem to have.",
        author:"Thomas Jefferson",
    },
    {
        quote:"Success is not final; failure is not fatal: It is the courage to continue that counts.",
        author:"Winston S. Churchill",
    },
    {
        quote:"Everything you can imagine is real.",
        author:"Pablo Picasso",
    },
    {
        quote:"If you want to make your dreams come true, the first thing you have to do is wake up.",
        author:"J.M. Power",
    },
    {
        quote:"There are no secrets to success. It is the result of preparation, hard work, and learning from failure.",
        author:"Colin Powell",
    },
    {
        quote:"The future belongs to those who believe in the beauty of their dreams.",
        author:"Eleanor Roosevelt",
    },
    {
        quote:"To be successful, you have to be selfish, or else you will never achieve. And once you get to your highest level, then you have to be unselfish.",
        author:"Michael",
    },
    {
        quote:"Before anything else, preparation is the key to success.",
        author:"Alexander Graham Bell",
    },
    {
        quote:"The question isn‘t who is going to let me; it’s who is going to stop me.",
        author:"Ayn Rand",
    },
    {
        quote:"How wonderful it is that nobody need wait a single moment before starting to improve the world.",
        author:"Anne Frank",
    },
    {
        quote:"It does not matter how slowly you go as long as you do not stop.",
        author:"Confucius",
    }
]
const quote=document.querySelector("#quote span:first-child");
const author=document.querySelector("#quote span:last-child");
const todaysQuote=quotes[Math.floor(Math.random()*quotes.length)];
quote.innerText=todaysQuote.quote;
author.innerText=todaysQuote.author; 