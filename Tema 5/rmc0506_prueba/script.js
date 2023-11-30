let cards = document.querySelectorAll(".memoryCard");

function voltear() {
  this.classList.toggle("flip"); //this.classList es la tarjeta en la que se hace click.
}

cards.forEach((card) => card.addEventListener("click", voltear));
