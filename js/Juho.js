/// <reference path="jquery-3.6.0.js" />
$(function(){
/**
 *  Juho Karppinen
 */

/*palaute*/

let points = 0;
let nopoints = 0;

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
    let answer = ($(this).val());
    if (answer === "1") {
        
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
/* Laskee pisteet */

$(".answer").on("click", function(){
    let answer = ($(this).val());
    if (answer === "1") {
        let name = $(this).attr("name");
            "[name=" + name + "][value=1]";
            points++; 
        } else {
            let name = $(this).attr("name");
            "[name=" + name + "][value=1]";
            nopoints++;
        }
    })
/*Tulostaa pisteet*/ 
$("#end_button").on("click", function(){
    $("#Score").html(points + "/5")
})
/*Tulostaa palautteen*/ 
$("#end_button").on("click", function(){
if(points <= 2) {
    $("#Feedback").html("Nyt ei mennyt aivan nappiin!");
} else if(points === 3) {
    $("#Feedback").html("Vielä voisit vähän parantaa!");
} else if(points >= 4) {
    $("#Feedback").html("Hienosti meni!");
}
})
/* Tuo loppu näytön esiin "Tarkista tulos napista" */
$("#end_button").on("click", function(){
    $("#questions").addClass("not_visible")
    $("#summary").removeClass("summary")
})
});

