document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.question-button, .hero-button, .button-second, .button-first2');
    const popup = document.getElementById('popup-form');
    const closeButton = document.querySelector('.close-button');

    buttons.forEach(button => {
        button.addEventListener('click', (event) => {
            event.preventDefault(); // Prevent default action
            popup.style.display = 'block';
        });
    });

    closeButton.addEventListener('click', () => {
        popup.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target == popup) {
            popup.style.display = 'none';
        }
    });
});