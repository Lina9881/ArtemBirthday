

/* ===========================
   ПЕРВАЯ СТРАНИЦА
=========================== */

function wrongAnswer(image) {
    // Неправильный ответ
}

function correctAnswer(image) {

    image.classList.add("selected");

    document.getElementById("success")
        .classList.remove("hidden");

    document.querySelectorAll(".images img")
        .forEach(img => img.onclick = null);
}

function nextPage() {

    document.getElementById("page1")
        .classList.add("hidden");

    document.getElementById("page2")
        .classList.remove("hidden");
}


/* ===========================
   ВТОРАЯ СТРАНИЦА
=========================== */

let birthdayName = "";
let birthdayDate = "";

document.getElementById("birthdayForm")
    .addEventListener("submit", function(event) {

        event.preventDefault();

        birthdayName =
            document.getElementById("name").value.trim();

        birthdayDate =
            document.getElementById("birthday").value;

        // Проверка существования даты
        const parts = birthdayDate.split("/");
        const day = Number(parts[0]);
        const month = Number(parts[1]);
        const year = Number(parts[2]);

        const date = new Date(year, month - 1, day);

        if (
            date.getFullYear() !== year ||
            date.getMonth() !== month - 1 ||
            date.getDate() !== day
        ) {
            alert("Пожалуйста, введи существующую дату!");
            return;
        }

        // Переход к анкете
        document.getElementById("page2")
            .classList.add("hidden");

        document.getElementById("page3")
            .classList.remove("hidden");
    });


/* ===========================
   ТРЕТЬЯ СТРАНИЦА
   ВЫБОР ВАРИАНТОВ
=========================== */

// Выбор нескольких вариантов
document.querySelectorAll(".choices button")
    .forEach(button => {

        button.addEventListener("click", function() {

            this.classList.toggle("selected");

        });

    });


/* ===========================
   СОЗДАНИЕ ПОЗДРАВЛЕНИЯ
=========================== */

// Соединяем выбранные слова
function joinWords(words) {

    if (words.length === 0) return "";

    if (words.length === 1) {
        return words[0];
    }

    if (words.length === 2) {
        return words[0] + " и " + words[1];
    }

    return words.slice(0, -1).join(", ")
        + " и " + words[words.length - 1];
}


// Получаем ответы из каждой категории
function getAnswers(group) {

    return Array.from(
        document.querySelectorAll(
            `.choices[data-group="${group}"] button.selected`
        )
    ).map(button => button.dataset.value || button.textContent.trim());

}


// Создаём письмо
function createLetter() {

    const leave = getAnswers("leave");
    const become = getAnswers("become");
    const like = getAnswers("like");
    const lack = getAnswers("lack");

    // Проверяем заполнение всех категорий
    if (
        leave.length === 0 ||
        become.length === 0 ||
        like.length === 0 ||
        lack.length === 0
    ) {
        alert("Выбери хотя бы один вариант в каждой категории!");
        return;
    }

    // Заполняем поздравление
    document.getElementById("letterName").textContent = birthdayName;

    document.getElementById("letterLeave").textContent =
        joinWords(leave);

    document.getElementById("letterBecome").textContent =
        joinWords(become);

    document.getElementById("letterLike").textContent =
        joinWords(like);

    document.getElementById("letterLack").textContent =
        joinWords(lack);

    // Переключаем страницы
    document.getElementById("page3").classList.add("hidden");

    document.getElementById("page4").classList.remove("hidden");

    window.scrollTo(0, 0);
}


// Обработчик кнопки
const quizButton = document.getElementById("quizSubmit");

if (quizButton) {
    quizButton.addEventListener("click", createLetter);
} else {
    console.error("Кнопка quizSubmit не найдена!");
}

/* ===========================
   ЧЕТВЁРТАЯ СТРАНИЦА
=========================== */


// Переход с четвёртой страницы на пятую

function finishLetter() {

    document.getElementById("page4").classList.add("hidden");

    document.getElementById("page5").classList.remove("hidden");

    window.scrollTo(0, 0);
}


// Изменение текста кнопки при выборе вариантов

document.querySelectorAll(".birthday-check")
    .forEach(checkbox => {

        checkbox.addEventListener("change", function() {

            const button = document.getElementById("fifthButton");

            const selected = document.querySelectorAll(
                ".birthday-check:checked"
            );

            if (selected.length > 0) {
                button.textContent = "ПОЛУЧИТЬ ПОДАРКИ";
            } else {
                button.textContent = "ОТВЕТИТЬ";
            }

        });

    });


// Нажатие на кнопку


function getGifts() {

    const selected = Array.from(
        document.querySelectorAll(".birthday-check:checked")
    ).map(item => item.value);

    if (selected.length === 0) {
        alert("Сначала выбери хотя бы один вариант!");
        return;
    }

    document.getElementById("page5")
        .classList.add("hidden");

    document.getElementById("page6")
        .classList.remove("hidden");

    window.scrollTo(0, 0);
}


// Переход с шестой страницы на седьмую

function nextPage7() {

    document.getElementById("page6")
        .classList.add("hidden");

    document.getElementById("page7")
        .classList.remove("hidden");

    window.scrollTo(0, 0);
}

// ===========================
// ПРОВЕРКА НОМЕРА ТЕЛЕФОНА
// ===========================

document.getElementById("phoneForm")
    .addEventListener("submit", function(event) {

        event.preventDefault();

        const phoneInput =
            document.getElementById("phoneNumber");

        const message =
            document.getElementById("phoneMessage");

        const phone = phoneInput.value.replace(/[\s()-]/g, "");

        const correctPhone = "+19882803912";

        if (phone === correctPhone) {

            message.textContent =
                "УРА! НОМЕР ПРАВИЛЬНЫЙ! 💗";

            message.style.color = "#35a66b";

            // Предлагаем совершить звонок
            setTimeout(function() {
                window.location.href = "tel:" + correctPhone;
            }, 700);

        } else {

            message.textContent =
                "НЕПРАВИЛЬНЫЙ НОМЕР! ПОПРОБУЙ ЕЩЁ РАЗ 💔";

            message.style.color = "#e45b83";

        }

    });
function nextToPhonePage() {

    // Скрываем шестую страницу
    document.getElementById("page6")
        .classList.add("hidden");

    // Показываем страницу с телефоном
    document.getElementById("page7")
        .classList.remove("hidden");

    // Прокручиваем страницу наверх
    window.scrollTo(0, 0);
}

function openJohnPork() {

    document.getElementById("page7")
        .classList.add("hidden");

    document.getElementById("page8")
        .classList.remove("hidden");

    window.scrollTo(0, 0);

    const video = document.getElementById("johnPorkVideo");

    video.play();
}

