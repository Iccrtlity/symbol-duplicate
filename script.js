const symbolInput = document.getElementById('symbol-input');
const countInput = document.getElementById('count-input');
const output = document.getElementById('output');
const generateBtn = document.getElementById('generate-btn');
const copyBtn = document.getElementById('copy-btn');
const reverseBtn = document.getElementById('reverse-btn');

function getSymbol() {
  return symbolInput.value || '★';
}

function getCount() {
  return Math.min(Math.max(parseInt(countInput.value, 10) || 1, 1), 10000);
}

function setOutput(text) {
  output.textContent = text;
}

function getOutput() {
  return output.textContent;
}

function generate() {
  setOutput(getSymbol().repeat(getCount()));
}

function reverseOutput() {
  const text = getOutput();
  if (!text) return;
  setOutput([...text].reverse().join(''));
}

function copyOutput() {
  const text = getOutput();
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
reverseBtn.addEventListener('click', reverseOutput);
symbolInput.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') generate();
});
countInput.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') generate();
});

generate();
