function checkDate() {
  const dateInput = document.getElementById('dateInput').value;
  const errorMessage = document.getElementById('errorMessage');
  
  if (dateInput === '04/05') {
      document.querySelector('.login-screen').style.display = 'none';
      createHearts(); // Llama a la función para crear corazones
  } else {
      errorMessage.textContent = "Fecha incorrecta. Inténtalo de nuevo.";
  }
}

function showPage() {
  document.querySelector('header').style.display = 'block';
  document.querySelector('.content').style.display = 'block';
}

function createHearts() {
  let heartsCount = 30; // Número total de corazones

  for (let i = 0; i < heartsCount; i++) {
      const heart = document.createElement('div');
      heart.className = 'heart';
      heart.innerHTML = '❤️';

      // Posicionamiento aleatorio
      heart.style.left = Math.random() * 100 + 'vw'; // Posición horizontal aleatoria
      heart.style.top = Math.random() * 100 + 'vh';  // Posición vertical aleatoria

      // Tamaño fijo para que ocupen más espacio
      const size = Math.random() * 50 + 50; // Tamaño aleatorio entre 50px y 100px
      heart.style.fontSize = size + 'px';

      heart.style.animationDelay = Math.random() * 2 + 's'; // Retardo aleatorio en la animación
      document.body.appendChild(heart);

      // Eliminar el corazón después de la animación
      heart.addEventListener('animationend', () => {
          heart.remove();
          heartsCount--; // Reducir el contador de corazones
          // Mostrar la página una vez que todos los corazones hayan desaparecido
          if (heartsCount === 0) {
              showPage(); // Mostrar la página
          }
      });
  }
}

function showMessage() {
  document.getElementById("secretMessage").classList.toggle("hidden");
}
