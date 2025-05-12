

const generateBtn = document.getElementById('generateBtn');
const colorCodeDisplay = document.getElementById('colorCode');
const body = document.body;

function generateRandomColor() {
    // Gera um número hexadecimal aleatório de 6 dígitos
    const hexColor = Math.random().toString(16).slice(2, 8);
    return `#${hexColor}`;
}

function changeBackgroundColor() {
    const newColor = generateRandomColor();
    body.style.backgroundColor = newColor;
    colorCodeDisplay.textContent = newColor;
}

generateBtn.addEventListener('click', changeBackgroundColor);