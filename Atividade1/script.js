const passwordInput = document.getElementById('password');
const toggleBtn = document.getElementById('toggleSenha');
const estudanteCheckbox = document.getElementById('souEstudante');
const areaEstudante = document.getElementById('areaEstudante');
const submitBtn = document.getElementById('submitBtn');
const passwordError = document.getElementById('passwordError');

function validarSenha() {
  const tem8 = passwordInput.value.length >= 8;

  if (!tem8) {
    passwordInput.style.outline = 'none';
    passwordInput.style.border = '2px solid red';
    passwordError.style.display = 'block';
    return false;
  }

  passwordInput.style.border = '';
  passwordError.style.display = 'none';
  return true;
}

toggleBtn.onclick = () => {
  const isHidden = passwordInput.type === 'password';
  passwordInput.type = isHidden ? 'text' : 'password';
  toggleBtn.textContent = isHidden ? 'Ocultar' : 'Mostrar';
};

estudanteCheckbox.onchange = () => {
  areaEstudante.style.display = estudanteCheckbox.checked ? 'block' : 'none';
};

// valida também ao digitar 21
passwordInput.oninput = () => validarSenha();

// inicializa estado
toggleBtn.textContent = 'Mostrar';
areaEstudante.style.display = estudanteCheckbox.checked ? 'block' : 'none';

// validar ao clicar em Enviar
submitBtn.addEventListener('click', (event) => {
  const ok = validarSenha();
  if (!ok) event.preventDefault();
});

