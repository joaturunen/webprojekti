
$(function() {

    $("#kys1OikeaVas").on("click", function() {
        let selection = $("[name=vastausNappi1]:checked").val();

        if (selection === "1") {
            $("#result1").html("Laskeppas uudestaan..");

        }   else if (selection === "2") {

            $("#result1").html("Oikein, Hienoa!");
        
        }   else if (selection === "3") {

            $("#result1").html("Ei ihan...");
        
        }   else if (selection === "4") {

            $("#result1").html("Hups, väärin meni...");
        } 
          
 });

 $("#kys2OikeaVas").on("click", function() {
    let selection = $("[name=vastausNappi2]:checked").val();

    if (selection === "1") {
        $("#result2").html("Laskeppas uudestaan..");

    }   else if (selection === "2") {

        $("#result2").html("Oikein, Hienoa!");
    
    }   else if (selection === "3") {

        $("#result2").html("Ei ihan...");
    
    }   else if (selection === "4") {

        $("#result2").html("Hups, väärin meni...");
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


 $("[name=valintaNappi]").on("click", function() {
    $("#result").html("");
 });

});