// Campturem els elements del DOM.
const form = document.getElementById('form');
const nomUsuari = document.getElementById('nomUsuari');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

// Funcions
function mostraError(input, missatge) {
  const formControl = input.parentElement;
  
  formControl.className = 'form-control error';
  const label = formControl.querySelector('label');
  const small = formControl.querySelector('small');
  small.innerText = label.innerText + ' ' + missatge;  
}

function mostraCorrecte(input) {
  const formControl = input.parentElement;
  formControl.className = 'form-control correcte';
}

function esEmailValid(input) {
  // javascript validació email regex
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  
  //return re.exec(String(email).toLowerCase()); // true, false

  if(re.test(String(input.value).toLowerCase())) {
    mostraCorrecte(input);
  } else {
    mostraError(input, 'no té el format correcte.')
  }
}

function esObligatori(inputArray) {

  inputArray.forEach((input) => {
    if(input.value === '') {
      mostraError(input, 'és obligatori.')
    } else {
      mostraCorrecte(input);
    }
  });
}

function comprovaLongitud(input, min, max) {
  
  if(input.value.length < min) {
    mostraError(input, `ha de tenir almenys ${min} caràcters`)
  } else if(input.value.length > max) {
    mostraError(input, `ha de tenir màxim ${max} caràcters`)
  } else {
    mostraCorrecte(input);
  }
}

function comprovaContrasenyesIguals(input1, input2) {
  if(input1.value != input2.value) {
    mostraError(input2, ': no coincideix')
  }
}


// Esdeveniments
form.addEventListener('submit', (e) => {
  e.preventDefault();

  esObligatori([nomUsuari, email, password, password2]);

  comprovaLongitud(nomUsuari, 3, 15);
  comprovaLongitud(password, 4, 10);

  esEmailValid(email);

  comprovaContrasenyesIguals(password, password2);
});