/// <reference path="jquery-3.6.0.js" />
"use strict";

$(function () {
    const questions = [
        {
            index: 1,
            question: "Mikä eläin tämä on?",
            answers: ["Kissa", "Leopardi", "Leijona", "Susi"],
            correctIndex: 2,
            image: "img/jan-erik/leijona.jpg",
            //https://pixabay.com/fi/photos/lion-petoel%C3%A4in-vaarallinen-harja-3372720/
        },
        {
            index: 2,
            question: "Mikä eläin tämä on?",
            answers: ["Laama", "Alligaattori", "Virtahepo", "Norsu"],
            correctIndex: 3,
            image: "img/jan-erik/norsu.jpg",
            // https://pixabay.com/fi/photos/norsu-el%C3%A4inten-safari-nis%C3%A4k%C3%A4s-114543/
        },
        {
            index: 3,
            question: "Mikä eläin tämä on?",
            answers: ["Jääkarhu", "Panda", "Karhu", "Laiskiainen"],
            correctIndex: 1,
            image: "img/jan-erik/panda.jpg",
            // https://pixabay.com/fi/photos/panda-uhanalainen-harvinaisten-505149/
        },
        {
            index: 4,
            question: "Mikä eläin tämä on?",
            answers: ["Seepra", "Kameli", "Kirahvi", "Hirvi"],
            correctIndex: 2,
            image: "img/jan-erik/kirahvi.jpg",
            // https://pixabay.com/fi/photos/kirahvi-el%C3%A4inten-safari-5800387/
        },
        {
            index: 5,
            question: "Mikä eläin tämä on?",
            answers: ["Ilves", "Gepardi", "Tiikeri", "Hyeena"],
            correctIndex: 0,
            image: "img/jan-erik/ilves.jpg",
            // https://pixabay.com/fi/photos/predator-kissa-el%C3%A4inkunnan-4432461/
        },
    ];

    const QUETION_AMOUNT = questions.length;
    const NEXT_QUESTION_DELAY = 1000;

    const btnAnswerTitleIds = [
        "answer_option_1",
        "answer_option_2",
        "answer_option_3",
        "answer_option_4",
    ];
    const modal = new bootstrap.Modal(document.getElementById("modal"), {
        backdrop: "static",
        keyboard: false,
        focus: false,
    });

    const summary = new bootstrap.Modal(document.getElementById("summary"), {
        backdrop: "static",
        keyboard: false,
        focus: false,
    });

    let initCompleted = false;
    let questionIndex = 0;
    let questionObj;
    let question;
    let image;
    let correctIndex;
    let correctAnswer;
    let correct_answers = 0;
    let wrong_answers = 0;

    if (initCompleted === false) {
        init();
    }

    function init() {
        nextQuestion();
        clickHandler();
        initCompleted = true;
    }

    function nextQuestion() {
        if (questionIndex === QUETION_AMOUNT) {
            console.log("Game over!");
            modal.hide();
            showSummary();
        } else {
            questionObj = questions[questionIndex];
            question = questionObj.question;
            image = questionObj.image;
            correctIndex = questionObj.correctIndex;
            correctAnswer = questionObj.answers[correctIndex];

            clearInput();
            initElements();
            questionIndex++;
        }
    }

    function initElements() {
        // Insert question to title element
        $("#question").html(question);

        // Insert image to image element
        $("#questionImage").attr("src", image);

        // Insert answer options to answer buttons
        for (let i = 0; i <= btnAnswerTitleIds.length; i++) {
            $(`#${btnAnswerTitleIds[i]}`).html(questionObj.answers[i]);
        }
    }

    // Handle click event for each answer option button
    function clickHandler() {
        $("#answer_option_1").on("click", function () {
            validateAnswer($("#answer_option_1"), correctAnswer);
        });

        $("#answer_option_2").on("click", function () {
            validateAnswer($("#answer_option_2"), correctAnswer);
        });

        $("#answer_option_3").on("click", function () {
            validateAnswer($("#answer_option_3"), correctAnswer);
        });

        $("#answer_option_4").on("click", function () {
            validateAnswer($("#answer_option_4"), correctAnswer);
        });
    }

    function validateAnswer(answerBtn, correctAnswer) {
        disableButtons(answerBtn);

        if (answerBtn.text() === correctAnswer) {
            answerBtnAnimate(answerBtn, "bg-success", true);
            showWrongOrCorrectModal(true, correctAnswer);
            correct_answers++;
        } else {
            answerBtnAnimate(answerBtn, "bg-danger", true);
            showWrongOrCorrectModal(false, correctAnswer);
            wrong_answers++;
        }

        setTimeout(() => {
            nextQuestion();
            modal.hide();
        }, NEXT_QUESTION_DELAY);
    }

    function answerBtnAnimate(answerBtn, colorClass, timeout) {
        answerBtn.addClass(colorClass);

        if (!(timeout === true)) {
            setTimeout(() => {
                answerBtn.removeClass(colorClass);
            }, timeout);
        }
    }

    function disableButtons(answerBtn) {
        for (let i = 0; i < btnAnswerTitleIds.length; i++) {
            if (btnAnswerTitleIds[i] === answerBtn[0].id) {
                continue;
            } else {
                $(`#${btnAnswerTitleIds[i]}`).prop("disabled", true);
            }
        }
    }

    function clearInput() {
        for (let i = 0; i < btnAnswerTitleIds.length; i++) {
            $(`#${btnAnswerTitleIds[i]}`).prop("disabled", false);
            $(`#${btnAnswerTitleIds[i]}`).removeClass("bg-success");
            $(`#${btnAnswerTitleIds[i]}`).removeClass("bg-danger");
        }
    }

    function showWrongOrCorrectModal(answerBoolean, correctAnswer) {
        $("#modal_text").html(`Eläin on ${correctAnswer.toLowerCase()}.`);

        if (answerBoolean) {
            $("#modal_title").html("Oikein!");
            $("#modal_title").prepend(
                `<i class="fa fa-check text-success pe-2" aria-hidden="true"></i>`
            );
        } else {
            $("#modal_title").html("Väärin!");
            $("#modal_title").prepend(
                `<i class="fa fa-times text-danger pe-2" aria-hidden="true"></i>`
            );
        }

        modal.show();
    }

    function showSummary() {
        $("#summary_title").html("Peli päättyi!");
        $("#summary_title").prepend(
            `<i class="fa fa-thumbs-up text-success pe-2" aria-hidden="true"></i>`
        );

        $("#summary_correct_text").html(
            `Oikeita vastauksia: ${correct_answers}`
        );
        $("#summary_correct_text").prepend(
            `<i class="fa fa-check-square text-success pe-2" aria-hidden="true"></i>`
        );

        $("#summary_wrong_text").html(`Vääriä vastauksia: ${wrong_answers}`);
        $("#summary_wrong_text").prepend(
            `<i class="fa fa-times text-danger pe-2" aria-hidden="true"></i>`
        );

        summary.show();

        $("#btn_play_again").on("click", function () {
            location.reload();
        });
    }

    function getRndInteger(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }
});
