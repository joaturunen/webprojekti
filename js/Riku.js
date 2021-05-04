
let correctAnswers = 0;
let wrongAnswers = 0;

$(function() {

    $("#kys1OikeaVas").on("click", function() {
        let selection = $("[name=vastausNappi1]:checked").val();

        if (selection === "true") {
            $("#result1").html("Oikein, Hienoa!");
            correctAnswers++;
        }   else if (selection === "false") {
            wrongAnswers++;
            $("#result1").html("hups, väärin meni. Oikea vastaus on: 9");
        
        }    
 });

 $("#kys2OikeaVas").on("click", function() {
    let selection = $("[name=vastausNappi2]:checked").val();

    if (selection === "true") {
        $("#result2").html("Oikein, Hienoa!");
        correctAnswers++;
    }   else if (selection === "false") {
        wrongAnswers++;
        $("#result2").html("väärin meni!");
    
    }
      
});


$("#kys3OikeaVas").on("click", function() {
    let selection = $("[name=vastausNappi3]:checked").val();

    if (selection === "1") {
        $("#result3").html("Laskeppas uudestaan..");

    }   else if (selection === "2") {

        $("#result3").html("Oikein, Hienoa!");
    
    }   else if (selection === "3") {

        $("#result3").html("Ei ihan...");
    
    }   else if (selection === "4") {

        $("#result3").html("Hups, väärin meni...");
    } 
      
});


$("#kys4OikeaVas").on("click", function() {
    let selection = $("[name=vastausNappi4]:checked").val();

    if (selection === "1") {
        $("#result4").html("Laskeppas uudestaan..");

    }   else if (selection === "2") {

        $("#result4").html("Oikein, Hienoa!");
    
    }   else if (selection === "3") {

        $("#result4").html("Ei ihan...");
    
    }   else if (selection === "4") {

        $("#result4").html("Hups, väärin meni...");
    } 
      
});


$("#kys5OikeaVas").on("click", function() {
    let selection = $("[name=vastausNappi5]:checked").val();

    if (selection === "1") {
        $("#result5").html("Laskeppas uudestaan..");

    }   else if (selection === "2") {

        $("#result5").html("Oikein, Hienoa!");
    
    }   else if (selection === "3") {

        $("#result5").html("Ei ihan...");
    
    }   else if (selection === "4") {

        $("#result5").html("Hups, väärin meni...");
    } 
      
});


$("#kys6OikeaVas").on("click", function() {
    let selection = $("[name=vastausNappi6]:checked").val();

    if (selection === "1") {
        $("#result6").html("Laskeppas uudestaan..");

    }   else if (selection === "2") {

        $("#result6").html("Oikein, Hienoa!");
    
    }   else if (selection === "3") {

        $("#result6").html("Ei ihan...");
    
    }   else if (selection === "4") {

        $("#result6").html("Hups, väärin meni...");
    } 
      
});


 $("[name=vastausNappi1]").on("click", function() {
    $("#result1").html("");
 });

 $("[name=vastausNappi2]").on("click", function() {
    $("#result2").html("");
 });

 $("[name=vastausNappi3]").on("click", function() {
    $("#result3").html("");
 });

 $("[name=vastausNappi4]").on("click", function() {
    $("#result4").html("");
 });

 $("[name=vastausNappi5]").on("click", function() {
    $("#result5").html("");
 });

 $("[name=vastausNappi6]").on("click", function() {
    $("#result6").html("");
 });

 function showResult () {
    $("#tulosKortti").show()

    oikeatvastaukset();
 };


 function oikeatvastaukset() {
    if (correctAnswers === 0) { 
        $("#tulokset").html("0 / 6")

    }  else if (correctAnswers === 1) {
        $("#tulokset").html("1 / 6")

    } else if (correctAnswers === 2) {
        $("#tulokset").html("2 / 6")

    }  else if (correctAnswers === 3) {
        $("#tulokset").html("3 / 6")

    } else if (correctAnswers === 4) {
        $("#tulokset").html("4 / 6")

    } else if (correctAnswers === 5) {
        $("#tulokset").html("5 / 6")

    } else if (correctAnswers === 6) {
        $("#tulokset").html("6 / 6")
    }
}

 
});