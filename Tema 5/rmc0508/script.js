document.getElementById("enviar").addEventListener("click", checkAnswers)

var correctAnswers = 0;

function checkAnswers() {
  var questions = document.getElementsByClassName('question');
  for (var i = 0; i < questions.length; i++) {
     var question = questions[i];
     var inputs = question.getElementsByTagName('input');
     for (var j = 0; j < inputs.length; j++) {
        var input = inputs[j];
        if (input.checked) {
          if (input.value == 'correct') {
             correctAnswers++;
             question.classList.add('correct');
          } else {
             question.classList.add('incorrect');
          }
        }
     }
  }
  if (correctAnswers == 4) {
     alert('Has acertado todas las preguntas.');
  } else {
     alert('Has acertado ' + correctAnswers + ' preguntas.');
  }
}
