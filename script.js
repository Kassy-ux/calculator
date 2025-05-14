const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn');
let currentInput = '';
let resetNext = false;

buttons.forEach(btn => {
    btn.addEventListener('click', () => {
        const value = btn.getAttribute('data-value');

        if (btn.id === 'clear') {
            currentInput = '';
            display.textContent = '0';
        } else if (btn.id === 'equals') {
            try {
                currentInput = eval(currentInput).toString();
                display.textContent = currentInput;
                resetNext = true;
            } catch {
                display.textContent = 'Error';
            }
        } else {
            if (resetNext) {
                currentInput = '';
                resetNext = false;
            }
            currentInput += value;
            display.textContent = currentInput;
        }
    });
});