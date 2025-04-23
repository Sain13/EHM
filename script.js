let currentHint = 1;
const totalHints = 3;

function showHint(number) {
    for (let i = 1; i <= totalHints; i++) {
        const hint = document.getElementById(`hint${i}`);
        hint.style.display = (i === number) ? 'block' : 'none';
    }
}

function nextQuestion() {
    if (currentHint < totalHints) {
        currentHint++;
        showHint(currentHint);
    }
}

function previousQuestion() {
    if (currentHint > 1) {
        currentHint--;
        showHint(currentHint);
    }
}

// Инициализация: показываем первый вопрос при загрузке
document.addEventListener("DOMContentLoaded", () => {
    showHint(currentHint);
});
