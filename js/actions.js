class QuoteSong {
    
    constructor(quote, songTitle, author) {
        this.quote = quote;
        this.songTitle = songTitle;
        this.author = author;
    }

    getQuote() {
        return this.quote;
    }

    getSongTitle() {
        return this.songTitle;
    }

    getAuthor() {
        return this.author;
    }

}

function withoutHTML(str) {
      let regex = /<.{1,3}\/?>/g;
      str = str.replace(regex, "\n");
      return str;
          
}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function writeQuote() {
    box.classList.add("animacion");
    let quote = quotes[index];
    twitterButton.href = "https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=" + encodeURI(withoutHTML(quote.getQuote()));
    text.innerHTML = quote.getQuote();
    songTitle.innerHTML = quote.getSongTitle();
    author.innerHTML = quote.getAuthor();
    if(index == quotes.length - 1)
        index = 0;
    else
        index++;
}

function quitarPropiedad() {
    box.classList.remove("animacion");
}


let quotes = [
    new QuoteSong("Quiero despertarme en un mundo agradable. <br />Quiero darme libertad <br />Ya no quiero dar lo que no tiene sentido <br /> Solo quiero aquí estar",
    "Mundo Agradable", "Serú Girán"),
    new QuoteSong("Hice a mi cuerpo amigo del viento y la distancia <br />Y me fui a buscarle una verdad a mi corazón<br/>" +  
    "Algo tan grande como el cielo y las montañas <br/>" + 
    "Y tan pequeño como una gota de rocío <br/>" +
    "Y ya no estuvo mas conmigo mi corazón <br />" +
    "Se fue a posar en cada una de las cosas <br />" +
    "Y ya no estuvo mas conmigo mi corazón <br />" +
    "Se fue a fundir con la esencia y la sabia", "Hablando de la libertad", "La Renga"),
    new QuoteSong("Los amigos del barrio pueden desaparecer <br />Los cantores de radio pueden desaparecer <br />" +
    "Los que están en los diarios pueden desaparecer <br />" +
    "La persona que amas puede desaparecer. <br />" +
    "Los que están en el aire pueden desaparecer en el aire <br />" +
    "Los que están en la calle pueden desaparecer en la calle.", "Los Dinosaurios" , "Charly García"),
    new QuoteSong("Escondida en algún bosque<br /> Una puerta encontrarás<br /> " +
    "Su poder es el camino <br />" + "Que nos puede transformar <br />", "La Llave de La Puerta Secreta", "Rata Blanca"),
    new QuoteSong("Perdido por perdido<br />" + 
    "ya ves da lo mismo vivo<br/>" +
    "o muerto pero tu alma es otra cosa,<br/>"+
    "tu alma es la que te mueve<br />"+ 
    "tu alma es mi razón,<br />"+ 
    "tu alma es la fuerza.<br />", "El Viento Que Todo Empuja", "La Renga")
];


let index = getRndInteger(0, quotes.length - 1);
let box = document.getElementById("quote-box");
let text = document.getElementById("text");
let songTitle = document.getElementById("songTitle");
let author = document.getElementById("author");
let newQuote = document.querySelector("#new-quote");
let twitterButton = document.querySelector(".links__twitter");
newQuote.addEventListener("click", writeQuote);
box.addEventListener("animationend", quitarPropiedad);


writeQuote();