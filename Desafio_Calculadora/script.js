// visor da calculadora
const d = document.getElementById('display');
// todos os botões
const bs = document.querySelectorAll('.btn');

// valores principais
let cur = '0'; // número atual
let a = null;  // número guardado
let op = null; // operador (+ - × ÷)
let set = true; // controla se começa novo número

// mostra no visor
const show = () => (d.value = cur);

// função para digitar número ou ponto
const dig = (x) => {
  if (set) { // se for novo número
    cur = x === '.' ? '0.' : x;
    set = false;
  } else { // se já está digitando
    if (x === '.') cur = cur.includes('.') ? cur : cur + '.';
    else cur = cur === '0' ? x : cur + x;
  }
  show();
};

// faz cálculo
const calc = (x, y, o) =>
  o === '+' ? x + y
  : o === '−' ? x - y
  : o === '×' ? x * y
  : y === 0 ? NaN
  : x / y;

// formata resultado
const fmt = (n) =>
  !Number.isFinite(n) ? 'Erro' : String(Number(n.toFixed(12)));

// escolhe operador
const oper = (o) => {
  if (op && !set) { // se já tinha operador
    cur = fmt(calc(Number(a), Number(cur), op));
    a = cur;
  } else if (a == null) {
    a = cur;
  }
  op = o;
  set = true;
};

// botão igual
const eq = () => {
  if (!op || a == null) return;
  cur = fmt(calc(Number(a), Number(cur), op));
  a = op = null;
  set = true;
  show();
};

// limpar tudo
const clr = () => (cur = '0', a = op = null, set = true, show());

// mostra 0 no início
show();

// ações dos botões
bs.forEach((b) => b.addEventListener('click', () => {
  if (b.id === 'limpar') return clr();       // botão limpar
  if (b.id === 'calcular') return eq();      // botão igual
  if (b.classList.contains('operator'))      // botão operador
    return oper(b.textContent.trim());
  dig(b.getAttribute('data-value'));         // botão número/ponto
}));
