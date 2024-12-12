// 4. Работа с объектом Math
function calculateY(x) {
    try {
        if (x - 1 === 0) {
            throw new Error("Деление на ноль");
        }
        const y = Math.abs((x - 2) / (x - 1));
        return y;
    } catch (error) {
        alert("Ошибка: " + error.message);
    }
}

// Функция для обработки ввода значения x
function processInput() {
    const xInput = document.getElementById('xValue').value;
    const x = parseFloat(xInput);

    if (isNaN(x)) {
        alert("Пожалуйста, введите допустимое число");
        return;
    }

    const result = calculateY(x);
    const resultsDiv = document.getElementById('mathResults');

    if (result !== undefined) {
        const p = document.createElement('p');
        p.textContent = `y при x=${x} равно ${result}`;
        resultsDiv.appendChild(p);
    }
}

// Выводим результаты расчетов для предопределенных значений
document.addEventListener('DOMContentLoaded', (event) => {
    const resultsDiv = document.getElementById('mathResults');
    const values = [1, 2, 3, 4, 5];

    values.forEach(x => {
        const result = calculateY(x);
        if (result !== undefined) {
            const p = document.createElement('p');
            p.textContent = `y при x=${x} равно ${result}`;
            resultsDiv.appendChild(p);
        }
    });
});
