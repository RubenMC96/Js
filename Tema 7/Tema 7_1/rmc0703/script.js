window.addEventListener("load", inicio, false);

function inicio() {
  let xhr = new XMLHttpRequest();
  xhr.addEventListener(
    "readystatechange",
    function () {
      if (this.readyState == 4 && this.status == 200) {
        cargarXML(this);
      }
    },
    false
  );

  xhr.open("GET","https://randomuser.me/api/?results=6&format=XML",true);
  xhr.send();
}

function cargarXML(xml) {
  let documentoXML = xml.responseXML;
  let personas = documentoXML.getElementsByTagName("results");
  let fotos = [];
  let correos = [];

  for(let i = 0; i<2; i++){
    for(let j = 0; j<= personas.length-2; j++){

      fotos.push(personas[j].getElementsByTagName("medium")[0].textContent);
      correos.push(personas[j].getElementsByTagName("email")[0].textContent);
    }
  }
  let tarjetas = document.getElementsByClassName("frontFace");
  let emails = document.getElementsByClassName("textEmail"); 

  for(let i = 0; i <= fotos.length -1; i++){
    tarjetas[i].src = fotos[i];
    tarjetas[i].title = correos[i];
  }

  
}

let cards = document.querySelectorAll(".memoryCard");

let hasFlipCard = false;
let blockCard = false;
let frsCard;
let scdCard;

function voltear() {
  if (blockCard) {
    return true;
  }
  if (this === frsCard) {
    return true;
  }
  this.classList.add("flip"); //this.classList es la tarjeta en la que se hace click.

  if (!hasFlipCard) {
    hasFlipCard = true;
    frsCard = this;

    return true;
  }

  scdCard = this;

  checkForMatch();
}

function checkForMatch() {
  if (frsCard.dataset.lenguaje === scdCard.dataset.lenguaje) {
    disableCard();
    return true;
  }
  unflipCards();
}

function disableCard() {
  frsCard.removeEventListener("click", voltear);
  scdCard.removeEventListener("click", voltear);
  resetBoard();
}

function unflipCards() {
  blockCard = true;
  setTimeout(() => {
    frsCard.classList.remove("flip");
    scdCard.classList.remove("flip");

    resetBoard();
  }, 1500);
}

function resetBoard() {
  frsCard = null;
  scdCard = null;
  hasFlipCard = null;
  blockCard = null;
}

(function shuffle() {
  cards.forEach((card) => {
    let posRamdom = Math.floor(Math.random() * 12);
    card.style.order = posRamdom;
  });
})();
/* 
Para ejecutar la funcion de forma inmediata hay que envolver la funcion entre paréntesis y despues ejecutarla con la llamada ();*/

cards.forEach((card) => card.addEventListener("click", voltear));
