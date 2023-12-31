let cards = document.querySelectorAll(".memoryCard");

let hasFlipCard = false;
let blockCard = false;
let frsCard
let scdCard;


function voltear() {
  if(blockCard){
    return true;
  }
  if(this === frsCard){
    return true;
  }
  this.classList.add("flip"); //this.classList es la tarjeta en la que se hace click.

  if(!hasFlipCard){

    hasFlipCard = true;
    frsCard = this;

    return true;
  }
  
  scdCard = this;

  checkForMatch();
}

function checkForMatch(){

  if(frsCard.dataset.lenguaje === scdCard.dataset.lenguaje){
    disableCard();
    return true;
  }
  unflipCards();
}

function disableCard(){
  frsCard.removeEventListener("click", voltear);
  scdCard.removeEventListener("click", voltear);
  resetBoard();
}

function unflipCards(){
  blockCard = true;
  setTimeout(() =>{
    frsCard.classList.remove("flip");
    scdCard.classList.remove("flip");

    resetBoard();
  },1500);
}

function resetBoard(){
  frsCard = null;
  scdCard = null;
  hasFlipCard = null;
  blockCard = null;
}

(function shuffle(){
  cards.forEach(card =>{
    let posRamdom = Math.floor(Math.random()*12);
    card.style.order = posRamdom;
  });
})();
/* 
Para ejecutar la funcion de forma inmediata hay que envolver la funcion entre paréntesis y despues ejecutarla con la llamada ();*/


cards.forEach((card) => card.addEventListener("click", voltear));
