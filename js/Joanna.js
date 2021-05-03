
// Joanna Turunen

// kysymykset

"use strict";

$(function () {
        
    const kysymykset = [
        {
            kysymys: "______ does it cost?",
            vastaukset: ["How", "How much", "What", "How many"],
            oikeaNro: 1
        },
        {
            kysymys: "______ does the lesson start?",
            vastaukset: ["Where", "What", "Which", "When"],
            oikeaNro: 3
        },
        {
            kysymys: "______ far is your home from the school?",
            vastaukset: ["Which", "What", "How", "Why"],
            oikeaNro: 2
        },
        {
            kysymys: "______ do you like eating?",
            vastaukset: ["Where", "Who", "How many", "What"],
            oikeaNro: 3
        },
        {
            kysymys: "______ didn't you come yesterday?",
            vastaukset: ["Why", "Who", "What", "How"],
            oikeaNro: 0
        },
    ];

    const palauteTeksti = {
        alin: "Harjoittele vielä!", 
        keski: "Osasit melko hyvin!",
        ylin: "Mahtavaa, osasit hienosti!"
    };


    const kysymys_maara = kysymykset.length;

    const vastausNapinNumerot = [
        "vastaus_1",
        "vastaus_2",
        "vastaus_3",
        "vastaus_4"
    ];

    let initCompleted = false;
    let kysNro = 0;
    let oikeat = 0;
    let vaarat = 0;
    let kysymysData;
    let kysymys;
    let oikeaNro;
    let oikeaVastaus;


    if (initCompleted === false) {
        init();
    }
    
    $("#tulosruutu").hide();

    function init() {
        seuraava();
        $("#kysymyscardi").show();
        clickHandler();
        initCompleted = true;
    
    }

    $("#next").on('click', function() {
        if (initCompleted) kysNro++;
        
        $("#card").flip(false);
        if (kysNro >= kysymys_maara) {
            naytaTulos();
        } else {
            init();
        }
    })

    // näytä seuraava kysymys
    function seuraava() {
        kysymysData = kysymykset[kysNro];
        kysymys = kysymysData.kysymys;
        oikeaNro = kysymysData.oikeaNro;
        oikeaVastaus = kysymysData.vastaukset[oikeaNro];

        asetaKysymys();
    }

    // kysymyksen tulostus html:n
    function asetaKysymys() {
        $("#kysNro").html(`${kysNro + 1} / ${kysymys_maara}`);
        $("#kysymys").html(kysymys);
        for ( let i=0; i <= vastausNapinNumerot.length; i++) {
            $(`#${vastausNapinNumerot[i]}`).html(kysymysData.vastaukset[i]);
        }
    }

    // vastausnapin klikkaus
    function clickHandler() {
        $("[name=vastausNappi]").each(function () {
            $(this).on("click", function () {
                tarkistaVastaus($(this), oikeaVastaus);
                $("#card").flip(true);
                $("#oikeaVastaus").html("Oikea vastaus on " + oikeaVastaus + ".");
            });
        });
    }

    /* 
    * @param {Object} vastausNappi 
    * @param {String} oikeaVastaus
    */

    // vastauksen tarkistaminen
    function tarkistaVastaus(vastausNappi, oikeaVastaus) {

        if (vastausNappi.text() === oikeaVastaus) {
            oikeat++;
            $(`[name=pallura]:eq(${kysNro})`).addClass("right");
            $("#palaute").html("Hienoa, vastasit oikein!");
            
        } else {
            vaarat++;
            $(`[name=pallura]:eq(${kysNro})`).addClass("wrong");
            $("#palaute").html("Oi voi, vastaus meni väärin.");
            
        }
    }

    // kortin kääntö
    $("#card").flip({
        trigger: 'manual'
    });

    function naytaTulos() {
        $("#kysymyscardi").hide();
        $("#tulosruutu").show();

        laskePalaute();
        

        $("#oikeat").append(oikeat);
        $("#vaarat").append(vaarat);

        $("#startAgain").on('click', function() {
            location.reload();
        })
    }

    function laskePalaute() {
        if(oikeat <= 1) {
            $("#lopputulos").html(palauteTeksti.alin);
        } else if(oikeat === 3) {
            $("#lopputulos").html(palauteTeksti.keski);
        } else if(oikeat >= 4) {
            $("#lopputulos").html(palauteTeksti.ylin);
        }
    }


    

})





