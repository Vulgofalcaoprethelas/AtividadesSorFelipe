const body = document.body;

const azul = () => body.style.backgroundColor = 'blue';
const verde = () => body.style.backgroundColor = 'green';
const vermelho = () => body.style.backgroundColor = 'red';

document.getElementById('btn-azul').addEventListener('click', azul);
document.getElementById('btn-verde').addEventListener('click', verde);
document.getElementById('btn-vermelho').addEventListener('click', vermelho);

