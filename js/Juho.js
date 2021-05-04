/// <reference path="jquery-3.6.0.js" />
$(function(){
/**
 *  Juho Karppinen
 */

/*palaute*/
const Feedback = [
    Low = "Nyt ei mennyt aivan nappiin!",
    Middle ="Vielä voi vähän parantaa!",
    High = "Hienosti meni!",
    Empty = "Vastaathan kaikkiin kysymyksiin!"
];
let points = $("")
/*Lukitsee vastaukset*/
 $(".answer").on("click", function(){
    $(this).parent().addClass("selected");
    let name_attribuutti = $(this).attr("name");
    let valinta = "[name=" + name_attribuutti + "]";
    $(valinta).prop("disabled", true);
});
    
/*Tuo esiin lisätietoa kysymyksen aiheesta.*/
$(".answer").on("click", function(){
    $(this).parent().parent().next().removeClass("not_visible");
});

/*Korostaa vihreällä oikean vastauksen kun jokin vaihtoehdoista valittu*/

$(".answer").on("click", function(){
    let answer = Number($(this).val());
    if (answer === 1) {
        
        $(this).parent().addClass("selected")
        let name_attribuutti = $(this).attr("name");
        let correct_answer = "[name=" + name_attribuutti + "][value=1]";
        $(correct_answer).parent().addClass("right")
    } else {
        
        $(this).parent().addClass("Wrong");
        let name_attribuutti = $(this).attr("name");
        let correct_answer = "[name=" + name_attribuutti + "][value=1]";
        $(correct_answer).parent().addClass("right")
    }
});

/* Tuo loppu näytön esiin "Tarkista tulos napista" */


/* Laskee pisteet ja tulostaa pisteet sekä palautteeen */
$("#end_button").on("click", function(){
    $("#Score").html(points + "/5")
})

$("#end_button").on("click", function(){
    $("#questions").addClass("not_visible")
    $("#summary").removeClass("summary")
})
});