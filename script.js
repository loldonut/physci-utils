function Triad(a, b) {
  return (a + b) / 2;
}

const [inputA, inputB] = [
  document.getElementById('eq_A'),
  document.getElementById('eq_B'),
];
const results = document.getElementById('res');

const getById = (...args) => document.getElementById(...args).value || '';

inputA.addEventListener('input', inputHandler);
inputA.addEventListener('propertychange', inputHandler);

inputB.addEventListener('input', inputHandler);
inputB.addEventListener('propertychange', inputHandler);

function inputHandler(e) {
  const a = Number(getById('eq_A'));
  const b = Number(getById('eq_B'));

  if (Number.isNaN(a) || Number.isNaN(b)) {
    return;
  }

  const res = Triad(a, b);

  results.style.fontFamily = 'sans-serif';
  results.innerHTML = `(${a} + ${b}) ÷ 2 =\n<b>${res}</b>`;
}
