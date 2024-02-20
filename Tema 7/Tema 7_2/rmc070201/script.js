
$(document).ready(inicio);


// function inicio() {
//   let xhr = new XMLHttpRequest();
//   xhr.addEventListener(
//     "readystatechange",
//     function () {
//       if (this.readyState == 4 && this.status == 200) {
//         cargarXML(this);
//       }
//     },
//     false
//   );

//   xhr.open("GET","https://randomuser.me/api/?results=6&format=XML",true);
//   xhr.send();
// }

function inicio() {
  $.ajax({
    url: "https://randomuser.me/api/?results=6&format=XML",
    type: "GET",
    dataType: "xml",
    success: cargarXML,
    error: function(jqXHR, textStatus, errorThrown) {
      console.error(textStatus, errorThrown);
    }
  });
}

function cargarXML(xml) {
  let personas = $(xml).find("results");
  let fotos = [];
  let correos = [];

  for(let i =  0; i <  2; i++){
    for(let j =  0; j < personas.length -1; j++){//Es necesario el -1 porque el api tiene un ultimo elemento vacio
      fotos.push($(personas[j]).find("medium").text());
      correos.push($(personas[j]).find("email").text());
    }
  }

  $(".frontFace").each(function(index) {
    $(this).attr("src", fotos[index]);
    $(this).attr("title", correos[index]);
  });
}

let cards = $(".memoryCard");

let hasFlipCard = false;
let blockCard = false;
let frsCard;
let scdCard;

 let voltear = $(".memoryCard").on("click", function() {
  if (blockCard) {
    return true;
  }

  if ($(this)[0] === frsCard) {
    return true;
  }

  $(this).addClass("flip");

  if (!hasFlipCard) {
    
    hasFlipCard = true;
    frsCard = $(this);
    return true;
  }

  scdCard = $(this);
  checkForMatch();
});

function checkForMatch() {
  var frsCardLenguaje = frsCard.data('lenguaje');
  var scdCardLenguaje = scdCard.data('lenguaje');

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

