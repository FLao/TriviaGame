$(document).ready(function(){
    var count = 0;
    var time = 31;
    var isSelected = false;
    var ticker;
    var correct = 0;
    var incorrect = 0;
    var unanswered = 0;

    var question = ["This female solo artist had a number one hit called Stay but never released an album:",
    "The country that the group Ace of Base comes from:", "The song On Bended Knee was by: ", "The month that also is the name of a title for a Greenday track:", "This guest rapper rapped part of Snoop Doggy Dogg's Gin and Juice: ", "This former MTV's VJ now hosts on Sirius XM 90s on 9 station:", "In country music, this hit called How Do I Live belonged to: ", "Trance originated from this nation: "];
    var answer = ["Lisa Loeb", "Sweden", "Boyz II Men", "September", "Dr. Dre", "Downtown Julie Brown", "LeAnn Rimes", "Germany"];
    var firstChoice = ["Whitney Houston", "United States", "Boyz II Men", "March", "Tupac", "Pauly Shore", 
    "Garth Brooks", "Germany"];
    var secondChoice = ["Mariah Carey", "Sweden", "Jodeci", "September", "NAS", "Carmen Electra", "LeAnn Rimes", "Mexico"];
    var thirdChoice = ["Lisa Loeb", "France", "Hootie and the Blowfish", "June", "Ice Cube", "Downtown Julie Brown", "Tanya Tucker", "Japan"];
    var fourthChoice = ["Madonna", "Canada", "Kris Kross", "December", "Dr. Dre", "Daisy Fuentes", "Billy Ray Cyrus", "Brazil"];

    function showHolders() {
        $("#question-holder").show();
        $("#choice-holder-1").show();
        $("#choice-holder-2").show();
        $("#choice-holder-3").show();
        $("#choice-holder-4").show();
    }
    function hideHolders() {
        $("#question-holder").hide();
        $("#choice-holder-1").hide();
        $("#choice-holder-2").hide();
        $("#choice-holder-3").hide();
        $("#choice-holder-4").hide();
    }
    function hideResults() {
        $("#correct-holder").hide();
        $("#incorrect-holder").hide();
        $("#unanswered-holder").hide();
        $("#restart-holder").hide();
    }
    function displayQuestion () {
        hideResults();
        $("#answer-holder").hide();
        $("#image-holder").hide();
        $("#time-holder").show();
        showHolders();
        $("#question-holder").html(question[count]);
        $("#choice-holder-1").html(firstChoice[count]);
        $("#choice-holder-2").html(secondChoice[count]);
        $("#choice-holder-3").html(thirdChoice[count]);
        $("#choice-holder-4").html(fourthChoice[count]);
        
        $("#choice-holder-1").hover(function() {
            $(this).css("background-color", "gray");
        },
        function(){
            $(this).css("background-color", "black");
        });
        $("#choice-holder-2").hover(function() {
            $(this).css("background-color", "gray");
        },
        function(){
            $(this).css("background-color", "black");
        });
        $("#choice-holder-3").hover(function() {
            $(this).css("background-color", "gray");
        },
        function(){
            $(this).css("background-color", "black");
        });
        $("#choice-holder-4").hover(function() {
            $(this).css("background-color", "gray");
        },
        function(){
            $(this).css("background-color", "black");
        });
    }
    $("#choice-holder-1").on("click", checkAnswer) 
    $("#choice-holder-2").on("click", checkAnswer)
    $("#choice-holder-3").on("click", checkAnswer)
    $("#choice-holder-4").on("click", checkAnswer)

    function checkAnswer() {

        hideHolders();

        if($(this).text() === answer[count]) {
            stopTime();
            isSelected = true;
            $("#answer-holder").show();
            $("#answer-holder").html("Right! The answer was: " + answer[count]);
            displayImage();
            correct++;
            count++;
        }
        else {
            stopTime();
            isSelected = true;
            $("#answer-holder").show();
            $("#answer-holder").html("Wrong! The answer was: " + answer[count]);
            displayImage();
            incorrect++;
            count++;
        } 

        checkGameEnd();  
    }

    function checkGameEnd() {
        if(count === question.length) {
            $("#time-holder").hide();
            showResults();
            count = 0;
            $(".start").show();
            $(".start").on("click", function() {
                resetResults();
                startGame();
            });
        }
    }

    function resetTime() {
        time = 31;
    }

    function displayTime() {
        time--;
        $("#time-holder").html("Time remaining: " + time);
      
            if(time <= 0) {
                hideHolders();
                stopTime();
                $("#answer-holder").show();
                $("#answer-holder").html("Time is up! The answer was: " + answer[count]);
                displayImage();
                unanswered++;
                count++;
                checkGameEnd();
            }
    }

    function startTime() {
        clearInterval(ticker);
        ticker = setInterval(displayTime, 1000);
    }
    function stopTime() {
        clearInterval(ticker);
        resetTime();
        if(count < question.length - 1) {
            setTimeout(startTime, 2000);
            setTimeout(displayQuestion, 3000);
        }
    }

    resetTime();

    function displayImage() {
        if(count === 0) {
            $("#image-holder").show();
            $("#image-holder").html('<img src="assets/images/lisaloeb.jpg">');
        }
        else if(count === 1) {
            $("#image-holder").show();
            $("#image-holder").html('<img src="assets/images/aceofbase.jpg">');
        }
        else if(count === 2) {
            $("#image-holder").show();
            $("#image-holder").html('<img src="assets/images/boyziimen.jpg">');
        }
        else if(count === 3) {
            $("#image-holder").show();
            $("#image-holder").html('<img src="assets/images/greenday.jpg">');
        }
        else if(count === 4) {
            $("#image-holder").show();
            $("#image-holder").html('<img src="assets/images/snoop.jpg">');
        }
        else if(count === 5) {
            $("#image-holder").show();
            $("#image-holder").html('<img src="assets/images/downtownjuliebrown.jpg">');
        }
        else if(count === 6) {
            $("#image-holder").show();
            $("#image-holder").html('<img src="assets/images/leannrimes.jpg">');
        }
        else if(count === 7) {
            $("#image-holder").show();
            $("#image-holder").html('<img src="assets/images/trance.jpg">');
        }
    }

    function showResults() {
        $("#correct-holder").show();
        $("#correct-holder").html("Correct: " + correct);
        $("#incorrect-holder").show();
        $("#incorrect-holder").html("Incorrect: " + incorrect);
        $("#unanswered-holder").show();
        $("#unanswered-holder").html("Unanswered: " + unanswered);
        $("#restart-holder").show();
        $("#restart-holder").html("Click Start above to play again!");
    }

    function resetResults() {
        correct = 0;
        incorrect = 0;
        unanswered = 0;
    }

    function startGame() {
        $(".start").hide();
        startTime();
        displayQuestion();
    }

  $(".start").on("click", function() {
    startGame();
  });
});
