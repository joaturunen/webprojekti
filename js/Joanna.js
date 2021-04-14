// function flip(event) {
// 	var element = event.currentTarget;
// 	if (element.className === "card") {
//     if(element.style.transform == "rotateY(180deg)") { //back esillä, älä käännä
//       element.style.transform = "rotateY(0deg)";
//     }
//     else {
//       element.style.transform = "rotateY(180deg)"; // front esillä, käännä back
//     }
//   }
// };

// function checkout(event) {
//     var value = event.currentTarget;
//     if (value.className === "right") {

//     }
// }

$('.fliponclick').on("click", function() {
    $this = $(this);
    if ($this.hasClass('right')) {

    } else {
        
    }
})