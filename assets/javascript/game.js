//Start with document.ready to have th page fully load before we start

$(document).ready(function () {

    alert("Connect");
    // Generate the number between 20-100
    var numberToGet = Math.floor(Math.random() * 101) + 20;
    // display the random on the page
    $("#randomNumber").text(numberToGet);
    console.log(numberToGet);

    // Generate number for each crystal color 

    var crystalBlue = parseInt(Math.floor(Math.random() * 24) + 1);
    var crystalGreen = parseInt(Math.floor(Math.random() * 24) + 1);
    var crystalRed = parseInt(Math.floor(Math.random() * 24) + 1);
    var crystalYellow = parseInt(Math.floor(Math.random() * 24) + 1);

    // Setup the game rule
    var userWins = 0;
    var userLosses = 0;
    var userTotal = 0;

    // Show the Wins / Loss scores    
    //    $("#numberWins").text(userWins);
    //    $("#numberLosses").text(userLosses);
    //    $("#finalTotal").text(userTotal);


    // define function reset   
    function reset() {
        var crystalBlue = Math.floor(Math.random() * 24) + 1;
        var crystalGreen = Math.floor(Math.random() * 24) + 1;
        var crystalRed = Math.floor(Math.random() * 24) + 1;
        var crystalYellow = Math.floor(Math.random() * 24) + 1;
        userWins = 0;
        userLosses = 0;
        userTotal = 0;
    };
    
    function userWins() {
        alert("You won!!");
        userWins++;
        $("#numberWins").text(userWins);
        reset();

    };

    function userLosses() {
        alert("You losses");
        userLosses++;
        $("#numberLosses").text(userLosses);
        reset();

    };


    // define function user win
    function checkWinLoss() {
        if (userTotal == numberToGet) {
            userWins();
    
        }
        else if (userTotal < numberToGet) {
            return;
        }
        else {
            userLosses();
       
        };
        
    };
        
    // Adding score when each crystal are clicked
    $("#crystalblue").on("click", function () {
        userTotal += crystalBlue;
        checkWinLoss();
        console.log(crystalBlue);
        $("#finalTotal").text(userTotal);
    });

    $("#crystalgreen").on("click", function () {
        userTotal += crystalGreen;
        checkWinLoss();
        console.log(crystalGreen);
        $("#finalTotal").text(userTotal);
    });

    $("#crystalred").on("click", function () {
        userTotal += crystalRed;
        checkWinLoss();
        console.log(crystalRed);
        $("#finalTotal").text(userTotal);
    });

    $("#crystalyellow").on("click", function () {
        userTotal += crystalYellow;
        checkWinLoss();
        console.log(crystalYellow);
        $("#finalTotal").text(userTotal);
    });
    
    
    });

 