   
        $(document).ready(function () {

var wins = 0;      

var losses = 0;     

var numCounter = 0;    

var totalScore = 0;     

var bigNumRandom = null;  

var c1Num = null;   
var c2Num = null;           
var c3Num = null;           
var c4Num = null;           


            
            
            function startGame() {
                bigNumRandom = null;
                totalScore = 0;
                $("#totalScore, #bigNumRandom").empty();
       
            bigNumRandom = function () {Math.floor(Math.random() * 100) + 21;
            $("#random-score").text(bigNumRandom);
            };
            $("crystal1") = function() {
                var c1Num = Math.floor(Math.random() * 12 + 1);
              };

              $("crystal2") = function() {
                var c2Num = Math.floor(Math.random() * 12 + 1);
              };
              $("crystal3") = function() {
                var c3Num = Math.floor(Math.random() * 12 + 1);
              };
              $("crystal4") = function() {
                var c4Num = Math.floor(Math.random() * 12 + 1);
              };

            };
      
     startGame();

              
       $("crystal1").on("click", function() {
         totalScore = c1Num + numCounter;
         $((this).text(totalScore));
        });      
            
      $("crystal2").on("click", function() {
        totalScore = c2Num + numCounter;
        $((this).text(totalScore));
      });
     
      $("crystal3").on("click", function() {
        totalScore = c3Num + numCounter;
        $((this).text(totalScore));
      }); 
                
      $("crystal4").on("click", function() {
        totalScore = c4Num + numCounter;
        $((this).text(totalScore));
      });            
                 if (totalScore === bigNumRandom)    {    
                    $("#wins-loss").innerHTML = "You Win!";
                   var wins = 0;
                   $("#wins").innerHTML = parseInt(wins + 1); 
                } 
                
                else (totalScore > bigNumRandom) {
                    $("#wins-loss").innerHTML = "You Lose!";
                    var losses = 0;
                    $("#losses").innerHTML = parseInt(losses + 1); 
                }

            });  
 ////////////////////////////////////////////////////////////////////////////////////////////////////////           
            
            /*if (c1Num === "click") {
         
        }

        else if (c2Num === "click") {
            result = c2Num + counter;
        }

        else if (c3Num === "click") {
            result = c3Num + counter;
        }

        else (c4Num === "click") {
            result = c4Num + counter;
        }
        counter += crystalValue;
       New score: " + counter.  innerHTML*/
       
              /*        $(".btn-choice").on("click", function() {
                var numClick = $(this).val();
                //  var numClick1 = 1;
                  var random = Math.floor(Math.random() * 4 + 1);
                  $("#computer-pick").text(random);
                 if (parseInt(numClick) === random){
                     $("#result").text("YOU GUESSED CORRECTLY!!!")
                 }else {
          $("#result").text("YOU GUESSED INCORRECTLY")
          }; 
      
      });*/