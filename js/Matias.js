/// <reference path="jquery-3.6.0.js" />
const questions = [
  {
    question: 'Was ist das?',
    answers: [
      {
        text: 'der Hund',
        correct: true
      },
      {
        text: 'der Dog',
        incorrect: true
      },
      {
        text: 'die Doger',
        incorrect: true
      },
      {
        text: 'die Hund',
        incorrect: true
      }
    ],
    image: "<img src='img/imgMH/charles-deluvio-ieEv01cucy0-unsplash.jpg' class='rounded img-fluid imgshadow' alt='questionpic1'>"
  },
  {
    question: 'Was ist das?',
    answers: [
      {
        text: 'das Apple',
        incorrect: true
      },
      {
        text: 'das Appel',
        incorrect: true
      },
      {
        text: 'der Apfel',
        correct: true
      },
      {
        text: 'die Opel',
        incorrect: true
      }
    ],
    image: "<img src='img/imgMH/apple-1702316_1920.jpg' class='rounded img-fluid  imgshadow' alt='questionpic2'>"
  },

  {
    question: 'Was ist das?',
    answers: [
      {
        text: 'die Wurst',
        correct: true
      },
      {
        text: 'der Sausager',
        incorrect: true
      },
      {
        text: 'der Salami',
        incorrect: true
      },
      {
        text: 'das Makker',
        incorrect: true
      }
    ],
    image: "<img src='img/imgMH/grill-4147791_1920.jpg' class='rounded img-fluid  imgshadow' alt='questionpic3'>"
  },
  {
    question: 'Was ist das?',
    answers: [
      {
        text: 'der Cykkel',
        incorrect: true
      },
      {
        text: 'das Fahrrad',
        correct: true
      },
      {
        text: 'das Biccykkel',
        incorrect: true
      },
      {
        text: 'das Cyckkelrad',
        incorrect: true
      }
    ],
    image: "<img src='img/imgMH/robert-bye-tG36rvCeqng-unsplash.jpg' class='rounded img-fluid  imgshadow' alt='questionpic4'>"

  },

  {
    question: 'Was ist das?',
    answers: [
      {
        text: 'das Mobil',
        incorrect: true
      },
      {
        text: 'der Car',
        incorrect: true
      },
      {
        text: 'der Caren',
        incorrect: true
      },
      {
        text: 'das Auto',
        correct: true
      }
    ],
    image: "<img src='img/imgMH/alan-flack-VtfiPvSGh5s-unsplash.jpg' class='rounded img-fluid  imgshadow' alt='questionpic5'>"
  },
 
]
let wrong = 0;
let correct = 0;
let answerbuttons = document.getElementById('abuttons')

$(function () {
  let suffledQuestions, currentQuestionIndex
/* Pelin aloitus */

  $('#start-btn').on('click', function () {
    $('#qcontainer').removeClass('invis')
    
    $('#start-btn').addClass('invis')
    suffledQuestions = questions.sort(() => Math.random() - 0.5)
    currentQuestionIndex = 0
    correct = 0
    wrong = 0
    $("#correct_a").html(correct)
    $("#wrong_a").html(wrong)
    setNextQuestion()
    
  })
  function setNextQuestion () {
    resetAnswers()
    showQuestion(suffledQuestions[currentQuestionIndex])
  }
/* Luo kysymyksen ja vastaus painikkeet */
  function showQuestion (questions) {
    $('#question').html(questions.question)
    $('#image').html(questions.image)
    questions.answers.forEach(answer => {
      const button = document.createElement('button')
      button.innerText = answer.text
   
      $(button).addClass('btn btn-primary w-100 py-1 py-md-2 py-lg-3 fs-2 rounded-2 m-1 fw-bold')
     
    
     
      if (answer.correct) {
        button.dataset.correct = answer.correct
      }
      if(answer.incorrect){
        button.dataset.incorrect = answer.incorrect
      }

       addEventListener("click", selectAnswer) 
      $('#abuttons').append(button)
        })
      
    }
    
    
    
    
    /* Vastaus painikkeiden click tapahtuma  */
    function selectAnswer(e) {
     const sbutton = e.target
     
    if (sbutton.dataset.correct){
      correct += 1
      $("#correct_a").html(correct)
    
    
    if (suffledQuestions.length > currentQuestionIndex + 1){
        currentQuestionIndex++
        setNextQuestion()
     } else {
        endScreen()
     }
}
     if(sbutton.dataset.incorrect){
      wrong += 1
     $("#wrong_a").html(wrong)
      if (suffledQuestions.length > currentQuestionIndex + 1){
        currentQuestionIndex++
        setNextQuestion()
     } else {
       endScreen()
     }
     }
  } 

 /* tyhjentää vastaus painikkeet */
  function resetAnswers () {


    while (answerbuttons.firstChild) {
      answerbuttons.removeChild(answerbuttons.firstChild)
    }
  }
    

 /*loppunäkymän esille tuominen ja loppunäkymän painikkeiden click tapahtumat*/
 function endScreen () {
  $("#qcontainer").addClass("invis") 
  $("#endscreen").removeClass("invis")
   
   $("#score").html("Pisteet: " + correct + "/5")
  }

 $("#play-again").on("click", function(){
   resetAnswers();
  $("#endscreen").addClass("invis")
  $("#start-btn").removeClass("invis")
  $("#myModal").modal("hide")
  $("#wrong_a").html("")
  $("#correct_a").html("")
})
    
  $("#Vastaukset").on("click", function() {
    $("#myModal").modal("toggle")
  })
  
  /* sulkee vastaus modaalin */
  $("#Poistu").on("click", function(){
    $("#myModal").modal("hide")
  })
});

