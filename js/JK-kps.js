/// <reference path="jquery-3.6.0.js" />

/**
 *  Jan-Erik Kämäräinen
 */

"use strict";

$(function () {
    const Choice = {
        ROCK: 0,
        PAPER: 1,
        SCISSORS: 2,
    };

    const Game = {
        WIN: "Voitit",
        LOSE: "Hävisit",
        DRAW: "Tasapeli",
    };

    const Image = [
        "img/jan-erik/kivi.png",
        "img/jan-erik/paperi.png",
        "img/jan-erik/sakset.png",
    ];

    const Icon = [
        "img/jan-erik/voitto.png",
        "img/jan-erik/tasapeli.png",
        "img/jan-erik/havio.png",
    ];

    const FADEIN_DURATION = 300;
    const FADEOUT_DURATION = 150;
    const PAGE_LOAD_ANIMATION_DURATION = 1000;

    $(".animateOnLoad").animate({ opacity: "1" }, PAGE_LOAD_ANIMATION_DURATION);

    /**
     * Handles the choice button click
     */
    $("[name=rpsBtn]").each(function () {
        $(this).on("click", function () {
            clearResult();
            animateBtn($(this), "clicked", FADEIN_DURATION);
            checkResult($(this));
        });
    });

    /**
     * Returns a property of the Choice object
     * Makes the code easier to read.
     *
     * @param {number} number - Number between 0-2
     * @returns {object} - The choice from Choice object
     */
    function numToChoice(number) {
        if (number === 0) {
            return Choice.ROCK;
        } else if (number === 1) {
            return Choice.PAPER;
        } else if (number === 2) {
            return Choice.SCISSORS;
        }
    }

    /**
     * Compare the choices of user and computer.
     *
     * @param {object} rpsBtn - The user choice button object
     */
    function checkResult(rpsBtn) {
        let computerNum = getRndInteger(0, 2);
        let userNum = Number(rpsBtn.attr("data-choice"));

        let computerChoice = numToChoice(computerNum);
        let userChoice = numToChoice(userNum);

        if (userChoice === Choice.ROCK) {
            if (computerChoice === Choice.ROCK) {
                printResult(Game.DRAW);
                printResultIcon(Game.DRAW);
            }
            if (computerChoice === Choice.PAPER) {
                printResult(Game.LOSE);
                printResultIcon(Game.LOSE);
            }
            if (computerChoice === Choice.SCISSORS) {
                printResult(Game.WIN);
                printResultIcon(Game.WIN);
            }

            printResultImages(userNum, computerNum);
        }

        if (userChoice === Choice.PAPER) {
            if (computerChoice === Choice.ROCK) {
                printResult(Game.WIN);
                printResultIcon(Game.WIN);
            }
            if (computerChoice === Choice.PAPER) {
                printResult(Game.DRAW);
                printResultIcon(Game.DRAW);
            }
            if (computerChoice === Choice.SCISSORS) {
                printResult(Game.LOSE);
                printResultIcon(Game.LOSE);
            }

            printResultImages(userNum, computerNum);
        }

        if (userChoice === Choice.SCISSORS) {
            if (computerChoice === Choice.ROCK) {
                printResult(Game.LOSE);
                printResultIcon(Game.LOSE);
            }
            if (computerChoice === Choice.PAPER) {
                printResult(Game.WIN);
                printResultIcon(Game.WIN);
            }
            if (computerChoice === Choice.SCISSORS) {
                printResult(Game.DRAW);
                printResultIcon(Game.DRAW);
            }

            printResultImages(userNum, computerNum);
        }
    }

    /**
     * Print result string to element
     *
     * @param {String} result - Result string from Game object
     */
    function printResult(result) {
        $("#resultEl").fadeOut(FADEOUT_DURATION, function () {
            $(this).html(result).fadeIn(FADEIN_DURATION);
        });
    }

    /**
     * Prints the rock paper scissors images
     *
     * @param {Number} userNum - User choice between 0-2
     * @param {Number} computerNum - Computer choice between 0-2
     */
    function printResultImages(userNum, computerNum) {
        $("#user-choice").fadeOut(FADEOUT_DURATION, function () {
            $(this).attr("src", Image[userNum]).fadeIn(FADEIN_DURATION);
        });

        $("#computer-choice").fadeOut(FADEOUT_DURATION, function () {
            $(this).attr("src", Image[computerNum]).fadeIn(FADEIN_DURATION);
        });
    }

    /**
     * Prints the game result icons
     *
     * @param {string} result - Result string from Game object
     */
    function printResultIcon(result) {
        let icon;

        if (result === Game.WIN) {
            icon = Icon[0];
        }

        if (result === Game.DRAW) {
            icon = Icon[1];
        }

        if (result === Game.LOSE) {
            icon = Icon[2];
        }

        $("#resultIcon").fadeOut(FADEOUT_DURATION, function () {
            $(this).attr("src", icon).fadeIn(FADEIN_DURATION);
        });
    }

    /**
     * Clears the result element
     */
    function clearResult() {
        $("#resultEl").html("");
    }

    /**
     *
     * @param {object} rpsBtn - Rock/paper/scissors button object
     * @param {string} colorClass - Either bootstrap or self made class
     * @param {number} duration - in milliseconds
     */
    function animateBtn(rpsBtn, colorClass, duration) {
        rpsBtn.addClass(colorClass);

        rotateImage(rpsBtn, 360);

        setTimeout(() => {
            rpsBtn.removeClass(colorClass);
        }, duration);
    }

    /**
     * https://phppot.com/jquery/jquery-image-rotate/
     * Rotates the clicked button image
     * @param {object} rpsBtn - Rock/paper/scissors button object
     * @param {number} degree - The degree how much to rotate the image
     */
    function rotateImage(rpsBtn, degree) {
        $(rpsBtn.children()).animate(
            { transform: degree },
            {
                step: function (now) {
                    $(this).css({
                        transform: "rotate(" + now + "deg)",
                    });
                },
            }
        );
    }

    /**
     * Random number generator
     *
     * @param {Number} min - Minimum number
     * @param {Number} max - Maximum number
     * @returns {Number} - Returns a number between min and max (min and max included)
     */
    function getRndInteger(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
});
