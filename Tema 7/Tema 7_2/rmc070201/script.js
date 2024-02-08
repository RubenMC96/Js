
$(document).ready(function() {
  inicio();
});

function inicio() {
  $.ajax({
    url: "https://randomuser.me/api/?results=6&format=XML",
    type: "GET",
    dataType: "xml", // Specify the data type expected from the server
    success: function(xml) {
      cargarXML(xml);
    },
    error: function() {
      alert("Se ha producido un error");
    }
  });
}

function cargarXML(xml) {
  var $xml = $(xml);
  var personas = $xml.find("result");
  var fotos = [];
  var correos = [];

  // Assuming that 'result' is the correct tag name in the XML response
  // and that 'picture > medium' and 'email' are the correct paths to the photo URLs and email addresses
  personas.each(function() {
    var fotoUrl = $(this).find("picture > medium").text();
    var email = $(this).find("email").text();
    fotos.push(fotoUrl);
    correos.push(email);
  });

  var tarjetas = $(".frontFace");

  for (let i =  0; i < tarjetas.length; i++) {
    $(tarjetas[i]).attr("src", fotos[i]);
    $(tarjetas[i]).attr("title", correos[i]);
  }
}


let cards = $(".memoryCard");

let hasFlipCard = false;
let blockCard = false;
let frsCard;
let scdCard;

// Assuming blockCard and hasFlipCard are defined elsewhere in your code
// Also assuming disableCard and unflipCards are defined elsewhere in your code

// Define frsCard and scdCard outside of the function so they persist across calls


// Attach the click event handler to .memoryCard elements
 let voltear = $(".memoryCard").on("click", function() {
  // Check if blockCard is true
  if (blockCard) {
    return;
  }

  // Check if the clicked card is the first card
  if ($(this)[0] === frsCard) {
    return;
  }

  // Add the 'flip' class to the clicked card
  $(this).addClass("flip");

  // If there is no second card yet, set it and exit
  if (!hasFlipCard) {
    hasFlipCard = true;
    frsCard = $(this);
    return;
  }

  // Set the second card and proceed to check for a match
  scdCard = $(this);
  checkForMatch();
});

function checkForMatch() {
  // Use .data() to get the 'lenguaje' data attribute
  var frsCardLenguaje = frsCard.data('lenguaje');
  var scdCardLenguaje = scdCard.data('lenguaje');

  // Compare the 'lenguaje' attributes
  if (frsCardLenguaje === scdCardLenguaje) {
    disableCard();
    return true;
  }
  unflipCards();
}


function disableCard() {
  frsCard.off("click", voltear);
  scdCard.off("click", voltear);
  resetBoard();
}

function unflipCards() {
  blockCard = true;
  setTimeout(() => {
    frsCard.removeClass("flip");
    scdCard.removeClass("flip");

    resetBoard();
  }, 1500);
}

function resetBoard() {
  frsCard = null;
  scdCard = null;
  hasFlipCard = null;
  blockCard = null;
}

// (function shuffle() {
//   cards.forEach((card) => {
//     let posRamdom = Math.floor(Math.random() * 12);
//     card.style.order = posRamdom;
//   });
// })();


(function shuffle() {
  $('.memoryCard').each(function() {
    let posRandom = Math.floor(Math.random() *  12);
    $(this).css('order', posRandom);
  });
})();

// Para ejecutar la funcion de forma inmediata hay que envolver la funcion entre paréntesis y despues ejecutarla con la llamada ();*/

// cards.forEach((card) => card.on("click", voltear));

$(".memoryCard").each(function() {
  $(this).on("click", voltear);
});

