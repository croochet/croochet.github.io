const botaoAdd = document.querySelector('#adicionar');
const botaoReset = document.querySelector('#reset');
const textoLimite = document.querySelector('#limite');
let div = document.querySelector('.display');

function somar() {  
  let total = Number(div.innerText) + 1;
  if (total <= 10) {
    div.innerText = total;
    console.log(total);
  } else {
    textoLimite.classList.add('show');
  }
}

function resetar() {
  let currentValue = Number(div.innerText);

  if (currentValue > 0) {
    let interval = setInterval(() => {
      currentValue--;
      div.innerText = currentValue;

      if (currentValue <= 0) {
        clearInterval(interval); // Stop animation when it reaches 0
        textoLimite.classList.remove('show'); // Fade out limit message
      }
    }, 50); // Adjust speed (smaller = faster)
  } else {
    textoLimite.classList.remove('show');
  }
}


if (botaoAdd) {
  botaoAdd.addEventListener('click', somar);
}

if (botaoReset) {
  botaoReset.addEventListener('click', resetar);
}
