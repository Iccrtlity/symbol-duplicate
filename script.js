const symbolInput = document.getElementById('symbol-input');
const countInput = document.getElementById('count-input');
const output = document.getElementById('output');
const generateBtn = document.getElementById('generate-btn');
const copyBtn = document.getElementById('copy-btn');

function generate() {
  const symbol = symbolInput.value || '★';
  const count = Math.min(Math.max(parseInt(countInput.value, 10) || 1, 1), 10000);
  output.textContent = symbol.repeat(count);
}

function copyOutput() {
  const text = output.textContent;
  if (!text) return;

  navigator.clipboard.writeText(text)
    .then(() => {
      copyBtn.textContent = 'Copied!';
      copyBtn.classList.add('copied');
      setTimeout(() => {
        copyBtn.textContent = 'Copy';
        copyBtn.classList.remove('copied');
      }, 1500);
    })
    .catch(() => {
      copyBtn.textContent = 'Failed';
      setTimeout(() => {
        copyBtn.textContent = 'Copy';
      }, 1500);
    });
}

generateBtn.addEventListener('click', generate);
copyBtn.addEventListener('click', copyOutput);
symbolInput.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') generate();
});
countInput.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') generate();
});

generate();
