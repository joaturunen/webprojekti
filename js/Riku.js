/// <reference path="jquery-3.6.0.js" />

/* Riku Honkamäki */

$(function(){

    let correctAnswers = 0;
    let wrongAnswers = 0;
    
    
    /* Tarkistaa onko vastaus oikein ja laskee oikein- ja väärin vastauksia lopputulokseen */
    $(".answer").on("click", function(){
        let answer = ($(this).val());
        if (answer === "true") {
            let name = $(this).attr("name");
            "[name=" + name + "][value=true]";
            correctAnswers++; 
        } else {
            let name = $(this).attr("name");
            "[name=" + name + "][value=true]";
            wrongAnswers++;
        }
    });

    /* Lopettaa pelin ja tulostaa lopputuloksen ja kommentit */
    $("#lopetus").on("click", function() {
        if (correctAnswers === 0) { 
            $("#tulos").html("0 / 6 <br> Pystyt kyllä parempaan!")
    
        }  else if (correctAnswers === 1) {
            $("#tulos").html("1 / 6 <br> Kokeilehan uudelleen!")
    
        } else if (correctAnswers === 2) {
            $("#tulos").html("2 / 6 <br> Pientä viilausta vielä!")
    
        }  else if (correctAnswers === 3) {
            $("#tulos").html("3 / 6 <br> Osaat jo hyvin!")
    
        } else if (correctAnswers === 4) {
            $("#tulos").html("4 / 6 <br> Hienosti meni!")
    
        } else if (correctAnswers === 5) {
            $("#tulos").html("5 / 6 <br> Mahtavaa, osaat melkein kaikki!")
    
        } else if (correctAnswers === 6) {
            $("#tulos").html("6 / 6 <br> Vau! Kaikki oikein!")
        }
    });
        
        /* Piilottaa kysymykset ja tuo näkyviin tulos-sivun. */
        $("#lopetus").on("click", function(){
            $("#questions").addClass("not_visible")
            $("#loppuTulos").removeClass("loppuTulos")
        })

    });