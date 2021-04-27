


// kysymykset

const kysymykset = [
    {
        kysymys: "______ does it cost?",
        vastaukset: ["How", "How much", "What", "How many"],
        oikeaNro: 2
    },
    {
        kysymys: "______ does the lesson start?",
        vastaukset: ["Where", "What", "Which", "When"],
        oikeaNro: 4
    },
    {
        kysymys: "______ far is your home from the school?",
        vastaukset: ["Which", "What", "How", "Why"],
        oikeaNro: 3
    },
    {
        kysymys: "______ do you like eating?",
        vastaukset: ["Where", "Who", "How many", "What"],
        oikeaNro: 4
    },
    {
        kysymys: "______ didn't you come yesterday?",
        vastaukset: ["Why", "Who", "What", "How"],
        oikeaNro: 1
    },
];


$(function () {
    const kysymys_maara = kysymykset.length;

    const vastausNapinNumerot = [
        "vastaus_1",
        "vastaus_2",
        "vastaus_3",
        "vastaus_4"
    ];

    let peliLoppu = false;
    let kysNro = 0;
    let oikeat = 0;
    let vaarat = 0;
    let kysymysData;
    let kysymys;
    let oikeaNro;
    let oikeaVastaus;

    if (peliLoppu === false) {
        init();
    }

    // eka kysymys ja klikinkäsittely
    function init() {
        seuraava();
        clickHandler();
        peliLoppu = true;
    }

    // näytä seuraava kysymys
    function seuraava() {
        if (peliLoppu) kysNro++;

        if (kysNro >= kysymys_maara) {
            // peli loppuu
        } else {
            kysymysData = kysymykset[kysNro];
            kysymys = kysymysData.kysymys;
            oikeaNro = kysymysData.oikeaNro;
            oikeaVastaus = kysymysData.vastaukset[oikeaNro];

            asetaKysymys();
        }
    }

    // kysymyksen tulostus
    function asetaKysymys() {
        $("#kysNro").html(`${kysNro + 1} / ${kysymys_maara}`);
        $("#kysymys").html(kysymys);
        for ( let i=0; i <= vastausNapinNumerot.length; i++) {
            $(`#${vastausNapinNumerot[i]}`).html(kysymysData.vastaukset[i]);
        }

        if (!peliLoppu) {
            for (let i=0; i < kysymys_maara; i++) {

            }
        }
    }

    // vastausnapin klikkaus
    function clickHandler() {
        $("[name=vastausNappi]").each(function () {
            $(this).on("click", function () {
                tarkistaVastaus($(this), oikeaNro);
                $("#card").flip(true);
                $("#oikeaVastaus").html(oikeaVastaus);
            });
        });
    }

    /* 
    * @param {Object} vastausNappi 
    * @param {String} oikeaVastaus
    */

    function tarkistaVastaus(vastausNappi, oikeaVastaus) {
        // disableButtons(vastausNappi);

        if (vastausNappi.text() === oikeaVastaus) {
            // muuta back class right
            oikeat++;
        } else {
            // muuta back class wrong
            vaarat++;
        }

        // tähän seuraavaan siirtyminen timeoutilla tms
    }

    // kortin kääntö
    $("#card").flip({
        trigger: 'manual'
    });
    

})





