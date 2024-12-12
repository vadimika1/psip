// Функция для сохранения данных в Cookies и Local Storage
function saveData() {
    const userData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        dob: document.getElementById('dob').value,
        birthplace: document.getElementById('birthplace').value,
        hobbies: document.getElementById('hobbies').value
    };

    // Сохранение данных в Local Storage
    localStorage.setItem('userData', JSON.stringify(userData));

    // Сохранение данных в Cookies
    document.cookie = `userData=${JSON.stringify(userData)};path=/`;

    alert('Данные сохранены в Cookies и Local Storage');
}

// Функция для получения данных из Cookies
function loadData() {
    // Получение данных из Cookies
    const cookies = document.cookie.split('; ').find(row => row.startsWith('userData='));

    if (cookies) {
        const userData = JSON.parse(cookies.split('=')[1]);
        displayData(userData);
    } else {
        alert('Данные в Cookies не найдены');
    }
}

// Функция для очистки Cookies и Local Storage
function clearData() {
    // Очистка Cookies
    document.cookie = "userData=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    
    // Очистка Local Storage
    localStorage.removeItem('userData');

    alert('Данные очищены из Cookies и Local Storage');
    document.getElementById('output').textContent = '';
}

// Функция для отображения данных на странице
function displayData(data) {
    document.getElementById('output').textContent = JSON.stringify(data, null, 2);
}