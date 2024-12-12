// Внешний JavaScript файл

// Скрипт с использованием оператора return
function calculateSum(a, b) {
    return a + b;
}

console.log(`Сумма 5 и 3: ${calculateSum(5, 3)}`);

// Диалоговые окна
window.onload = function() {
    alert('Добро пожаловать на мой сайт!');
    let userName = prompt('Введите ваше имя:', 'Гость');
    if (userName) {
        alert(`Привет, ${userName}!`);
    } else {
        alert('Привет, Гость!');
    }
};
