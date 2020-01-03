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


       // startGame();


    if (numCounter === bigNumRandom) {
        $("#wins-loss").innerHTML = "You Win!";
        $("#losses").text(parseInt(losses + 1));
    }

    else if (numScore > bigNumRandom) {
        $("#wins-loss").innerHTML = "You Lose!";
        $("#losses").text(parseInt(losses + 1));
    }

});
