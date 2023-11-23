document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var username = document.getElementById('username').value;
    localStorage.setItem('username', username);
    alert('Usuario creado con éxito!');
   });
   
   window.addEventListener("load" = function() {
    var username = localStorage.getItem('username');
    if (username) {
      document.getElementById('username').value = username;
    }
   });
   