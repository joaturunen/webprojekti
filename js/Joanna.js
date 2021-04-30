


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

const kysymys_maara = kysymykset.length;
const SEURAAVA_KYSYMYS = 400;

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

$(function () {

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
            tulostaTulos();
        } else {
            kysymysData = kysymykset[kysNro];
            kysymys = kysymysData.kysymys;
            oikeaNro = kysymysData.oikeaNro;
            oikeaVastaus = kysymysData.vastaukset[oikeaNro];

            //resetInput();
            asetaKysymys();
        }
    }

    // kysymyksen tulostus html:n
    function asetaKysymys() {
        $("#kysNro").html(`${kysNro + 1} / ${kysymys_maara}`);
        $("#kysymys").html(kysymys);
        for ( let i=0; i <= vastausNapinNumerot.length; i++) {
            $(`#${vastausNapinNumerot[i]}`).html(kysymysData.vastaukset[i]);
        }

        // if (!peliLoppu) {
        //     for (let i=0; i < kysymys_maara; i++) {

        //     }
        // }
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

    function tarkistaVastaus(vastausNappi, oikeaVastaus) {

        if (vastausNappi.text() === oikeaVastaus) {
            // tulosta meni oikein
            $("[name=pallura]").addClass(".right");
            $("#palaute").html("Hienoa, vastasit oikein!");
            oikeat++;
        } else {
            // tulosta meni väärin
            $(".pallura").addClass(".wrong");
            $("#palaute").html("Oi voi, vastaus meni väärin.");
            vaarat++;
        }

        setTimeout(() => {
            seuraava();
        }, SEURAAVA_KYSYMYS);
    }

    // kortin kääntö
    $("#card").flip({
        trigger: 'manual'
    });


    // vaihda palluran väri

    /** 
     * @param {string} vari
    */

    // function varitaPallura(vari) {
    //     let pallura = $(`[name=pallura]:eq(${kysNro})`);

    //     $(pallura).addClass(vari);
    //     //$(pallura).addClass(".wrong");
    // }

    
    

})





