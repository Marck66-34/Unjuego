/*establece las variables y constantes que necesitamos 
para almacenar los datos que nuestro programa utilizará */
let randomNumber = Math.floor(Math.random() * 100) + 1;

const guesses = document.querySelector(".guesses");
const lastResult = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");

const guessSubmit = document.querySelector(".guessSubmit");
const guessField = document.querySelector(".guessField");

let guessCount = 1;
let resetButton;
/* ------------------------------------------------------------- */

function checkGuess() {
    // declara una variable llamada userGuess y establece su valor al valor actual ingresado 
    // dentro del campo de texto. También ejecutamos este valor a través del constructor Number() 
    // integrado, solo para asegurarnos de que el valor definitivamente sea un número.
  let userGuess = Number(guessField.value);
  if (guessCount === 1) {
    /* prueba está verificando si la variable guessCount 
    es igual a 1 (es decir, si este es el primer intento del jugador o no): */
    guesses.textContent = "Intentos anteriores: ";
  }
  guesses.textContent += userGuess + " ";

  if (userGuess === randomNumber) {
    lastResult.textContent = "¡Felicidades! ¡Lo adivinaste!";
    lastResult.style.backgroundColor = "green";
    lowOrHi.textContent = "";
    setGameOver();
  } else if (guessCount === 10) {
    lastResult.textContent = "¡¡¡Fin del juego!!!";
    setGameOver();
  } else {
    lastResult.textContent = "¡Incorrecto!";
    lastResult.style.backgroundColor = "red";
    if (userGuess < randomNumber) {
      lowOrHi.textContent = "¡El número es muy bajo!";
    } else if (userGuess > randomNumber) {
      lowOrHi.textContent = "¡El número es muy grande!";
    }
  }

  guessCount++;
  guessField.value = "";
  guessField.focus();
}
guessSubmit.addEventListener("click", checkGuess);/* eventos al botón guessSubmit.
 Este es un método toma dos valores de entrada (llamados argumentos) — el tipo de evento que queremos escuchar (en este caso, click) como una cadena, y el código que 
queremos ejecutar cuando ocurra el evento (en este caso la función checkGuess()) */
function setGameOver() {
  guessField.disabled = true;
  guessSubmit.disabled = true;
  resetButton = document.createElement('button');
  resetButton.textContent = 'Iniciar nuevo juego';
  document.body.append(resetButton);
  resetButton.addEventListener('click', resetGame);
}
function resetGame() {
  guessCount = 1;

  const resetParas = document.querySelectorAll(".resultParas p");
  for (let i = 0; i < resetParas.length; i++) {
    resetParas[i].textContent = "";
  }

  resetButton.parentNode.removeChild(resetButton);

  guessField.disabled = false;
  guessSubmit.disabled = false;
  guessField.value = "";
  guessField.focus();

  lastResult.style.backgroundColor = "white";

  randomNumber = Math.floor(Math.random() * 100) + 1;
}
const resetParas = document.querySelectorAll(".resultParas p");
for (let i = 0; i < resetParas.length; i++) {
  resetParas[i].textContent = "";
}
