$(document).ready(function () {

    var wins = 0;

    var losses = 0;

    var numCounter = 0;

    var bigNumRandom = Math.floor(Math.random() * 100) + 21;
    $("#random-score").text(bigNumRandom);

    var c1Num = $("#crystal1")
    c1Num.attr("data-crystalvalue", Math.floor(Math.random() * 12 + 1));
    var c2Num = $("#crystal2")
    c2Num.attr("data-crystalvalue", Math.floor(Math.random() * 12 + 1));
    var c3Num = $("#crystal3")
    c3Num.attr("data-crystalvalue", Math.floor(Math.random() * 12 + 1));
    var c4Num = $("#crystal4")
    c4Num.attr("data-crystalvalue", Math.floor(Math.random() * 12 + 1));

    $(".crystalImg").on("click", function () {
        var crystalValue = ($(this).attr("data-crystalvalue"))
        crystalValue = parseInt(crystalValue);
        numCounter += crystalValue;
        $("#totalScore").text(numCounter);
    });




    //function startGame() {
    //    bigNumRandom = null;
    //    totalScore = 0;
    //    $("#totalScore, #bigNumRandom").empty();





    /*    $("crystal2") = function () {
          var c2Num = Math.floor(Math.random() * 12 + 1);
      };
      $("crystal3") = function () {
          var c3Num = Math.floor(Math.random() * 12 + 1);
      };
      $("crystal4") = function () {
          var c4Num = Math.floor(Math.random() * 12 + 1);
          // };

      };*/

    // startGame();


    /* $("crystal1").on("click", function () {
         totalScore = c1Num + numCounter;
         $("#crystal1").innerHTML = totalScore;
     });

     /* $("crystal2").on("click", function () {
          totalScore = c2Num + numCounter;
          $((this).text(totalScore));
      });

      $("crystal3").on("click", function () {
          totalScore = c3Num + numCounter;
          $((this).text(totalScore));
      });

      $("crystal4").on("click", function () {
          totalScore = c4Num + numCounter;
          $((this).text(totalScore));
      });*/
    if (totalScore === bigNumRandom) {
        $("#wins-loss").innerHTML = "You Win!";
        var wins = 0;
        $("#wins").innerHTML = parseInt(wins + 1);
    }

    else if (totalScore > bigNumRandom) {
        $("#wins-loss").innerHTML = "You Lose!";
        var losses = 0;
        $("#losses").innerHTML = parseInt(losses + 1);
    }

});
