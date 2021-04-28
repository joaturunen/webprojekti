/// <reference path="jquery-3.6.0.js" />

/**
 *  Jan-Erik Kämäräinen
 */

"use strict";

const questions = [
    {
        question: "Mikä eläin tämä on?",
        answers: ["Kissa", "Leopardi", "Leijona", "Susi"],
        correctIndex: 2,
        image: "img/jan-erik/leijona.jpg",
        imageSrc:
            "https://pixabay.com/fi/photos/lion-petoel%C3%A4in-vaarallinen-harja-3372720/",
    },
    {
        question: "Mikä eläin tämä on?",
        answers: ["Laama", "Alligaattori", "Virtahepo", "Norsu"],
        correctIndex: 3,
        image: "img/jan-erik/norsu.jpg",
        imageSrc:
            "https://pixabay.com/fi/photos/norsu-el%C3%A4inten-safari-nis%C3%A4k%C3%A4s-114543/",
    },
    {
        question: "Mikä eläin tämä on?",
        answers: ["Jääkarhu", "Panda", "Karhu", "Laiskiainen"],
        correctIndex: 1,
        image: "img/jan-erik/panda.jpg",
        imageSrc:
            "https://pixabay.com/fi/photos/panda-uhanalainen-harvinaisten-505149/",
    },
    {
        question: "Mikä eläin tämä on?",
        answers: ["Seepra", "Kameli", "Kirahvi", "Hirvi"],
        correctIndex: 2,
        image: "img/jan-erik/kirahvi.jpg",
        imageSrc:
            "https://pixabay.com/fi/photos/kirahvi-el%C3%A4inten-safari-5800387/",
    },
    {
        question: "Mikä eläin tämä on?",
        answers: ["Ilves", "Gepardi", "Tiikeri", "Hyeena"],
        correctIndex: 0,
        image: "img/jan-erik/ilves.jpg",
        imageSrc:
            "https://pixabay.com/fi/photos/predator-kissa-el%C3%A4inkunnan-4432461/",
    },
];

$(function () {
    const QUESTION_AMOUNT = questions.length;
    //const NEXT_QUESTION_DELAY = 1800;
    const NEXT_QUESTION_DELAY = 500;

    const btnAnswerIds = [
        "answer_option_1",
        "answer_option_2",
        "answer_option_3",
        "answer_option_4",
    ];

    const answerModal = new bootstrap.Modal(
        document.getElementById("answerModal"),
        {
            backdrop: "static",
            keyboard: false,
            focus: false,
        }
    );

    const summaryModal = new bootstrap.Modal(
        document.getElementById("summaryModal"),
        {
            backdrop: "static",
            keyboard: false,
            focus: false,
        }
    );

    const summaryText = {
        One: "Tarvitset lisää harjoitusta. ☹️",
        Two: "Hyvä yritys. 🙂",
        Three: "Hyvä tulos! 😃",
        Four: "Mahtava tulos! 😁",
    };

    let initCompleted = false;
    let questionIndex = 0;
    let correct_answers = 0;
    let wrong_answers = 0;
    let questionObj;
    let question;
    let image;
    let correctIndex;
    let correctAnswer;

    if (initCompleted === false) {
        init();
    }

    /**
     * Executed on first page load
     * Gets the first question and sets the click handler
     */
    function init() {
        nextQuestion();
        clickHandler();
        initCompleted = true;
    }

    /**
     *  Shows the next question if there's questions left
     */
    function nextQuestion() {
        if (initCompleted) questionIndex++;

        if (questionIndex >= QUESTION_AMOUNT) {
            answerModal.hide();
            showsummaryModal();
        } else {
            questionObj = questions[questionIndex];
            question = questionObj.question;
            image = questionObj.image;
            correctIndex = questionObj.correctIndex;
            correctAnswer = questionObj.answers[correctIndex];

            resetInput();
            initElements();
        }
    }

    /**
     *  Inserts question image, index and
     *  answer options to elements in HTML
     */
    function initElements() {
        $("#questionIndex").html(`${questionIndex + 1}/${QUESTION_AMOUNT}`);
        $("#question").html(question);
        $("#questionImageSource").attr("href", questionObj.imageSrc);
        $("#questionImage").attr("src", image);
        for (let i = 0; i <= btnAnswerIds.length; i++) {
            $(`#${btnAnswerIds[i]}`).html(questionObj.answers[i]);
        }

        if (!initCompleted) {
            for (let i = 0; i < QUESTION_AMOUNT; i++) {
                $("#trophies").append(
                    `<i class="fa fs-1 text-white px-1 fa-trophy" name="trophy" aria-hidden="true"></i>`
                );
            }
        }
    }

    /**
     *  Handles the click event of answer buttons
     */
    function clickHandler() {
        $("[name=answerBtn]").each(function () {
            $(this).on("click", function () {
                validateAnswer($(this), correctAnswer);
            });
        });
    }

    /**
     *
     * @param {object} answerBtn - Answer button element
     * @param {string} correctAnswer - The question answer as a string
     */
    function validateAnswer(answerBtn, correctAnswer) {
        disableButtons(answerBtn);

        if (answerBtn.text() === correctAnswer) {
            answerBtnAnimate(answerBtn, "jk-btn-gradient-correct", true);
            trophyColor("text-success");
            showWrongOrCorrectModal(true, correctAnswer);
            correct_answers++;
        } else {
            answerBtnAnimate(answerBtn, "jk-btn-gradient-wrong", true);
            trophyColor("text-danger");
            showWrongOrCorrectModal(false, correctAnswer);
            wrong_answers++;
        }

        setTimeout(() => {
            nextQuestion();
            answerModal.hide();
        }, NEXT_QUESTION_DELAY);
    }

    /**
     *
     * @param {object} answerBtn - Answer button element
     * @param {string} colorClass - Highlight color as a string
     * @param {number|boolean} duration - in ms or Boolean true; true = color stays, Number = color fades after duration
     */
    function answerBtnAnimate(answerBtn, colorClass, duration) {
        answerBtn.addClass(colorClass);

        if (duration === false) {
            setTimeout(() => {
                answerBtn.removeClass(colorClass);
            }, duration);
        }
    }

    /**
     * Changes color of the trophy
     * @param {string} colorClass - Color class, for example text-success
     */
    function trophyColor(colorClass) {
        let trophy = $(`[name=trophy]:eq(${questionIndex})`);

        $(trophy).removeClass("text-white");
        $(trophy).addClass(colorClass);
    }

    /**
     * Disables answer buttons except the one user clicked
     * @param {object} answerBtn - Answer button element
     */
    function disableButtons(answerBtn) {
        for (let i = 0; i < btnAnswerIds.length; i++) {
            if (btnAnswerIds[i] === answerBtn[0].id) {
                continue;
            } else {
                $(`#${btnAnswerIds[i]}`).prop("disabled", true);
            }
        }
    }

    /**
     *  Enables the answer buttons and removes all unnecessary classes
     */
    function resetInput() {
        for (let i = 0; i < btnAnswerIds.length; i++) {
            $(`#${btnAnswerIds[i]}`).prop("disabled", false);
            $(`#${btnAnswerIds[i]}`).removeClass("jk-btn-gradient-correct");
            $(`#${btnAnswerIds[i]}`).removeClass("jk-btn-gradient-wrong");
        }
    }

    /**
     *
     * @param {boolean} answerBoolean - Is the answer correct
     * @param {string} correctAnswer - Correct question answer
     */
    function showWrongOrCorrectModal(answerBoolean, correctAnswer) {
        $("#modalText").html(`Eläin on ${correctAnswer.toLowerCase()}.`);

        if (answerBoolean) {
            $("#modalTitle").html("Oikein!");
            $("#modalTitle").prepend(
                `<i class="fa fa-check text-success pe-2" aria-hidden="true"></i>`
            );
        } else {
            $("#modalTitle").html("Väärin!");
            $("#modalTitle").prepend(
                `<i class="fa fa-times text-danger pe-2" aria-hidden="true"></i>`
            );
        }

        answerModal.show();
    }

    /**
     *  On game complete, show a summaryModal of correct and wrong questions
     */
    function showsummaryModal() {
        calculateSummaryText();

        $("#summaryTitle").html("Peli päättyi!");

        $("#summaryCorrect").html(
            `Oikeita vastauksia: <span class="badge bg-success">${correct_answers}</span>`
        );

        $("#summaryWrong").html(
            `Vääriä vastauksia: <span class="badge bg-danger">${wrong_answers}</span>`
        );

        summaryModal.show();

        $("#btnPlayAgain").on("click", function () {
            location.reload();
        });
    }

    /**
     *  Calculates the summary text and adds it to text element in the summary modal
     */
    function calculateSummaryText() {
        if (correct_answers === 0) {
            $("#summaryText").html(summaryText.One);
            console.log("0 oikeaa vastausta");
        } else if (correct_answers <= 2) {
            $("#summaryText").html(summaryText.Two);
            console.log("2 tai vähemmän oikeaa vastausta");
        } else if (correct_answers <= 4) {
            $("#summaryText").html(summaryText.Three);
            console.log("4 tai vähemmän oikeaa vastausta");
        } else if (correct_answers <= 5) {
            $("#summaryText").html(summaryText.Four);
            console.log("5 tai vähemmän oikeaa vastausta");
        }
    }

    /**
     *
     * @param {number} min - Minimum number
     * @param {number} max - Maximum number
     * @returns {number} - Returns a number between min and max (min included, max excluded)
     */
    function getRndInteger(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }
});
