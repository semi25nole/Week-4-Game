//This section will hold the variables which will contain our values for the game

var wins = 0;
var loss = 0;
var guesses = 0;

//This section will generate the random numbers for our crystals
//These 4 variables will be attached to our crystals which will generate a random number between 1-12

var c1 = Math.round(Math.random() * 10) + 1;
var c2 = Math.round(Math.random() * 10) + 1;
var c3 = Math.round(Math.random() * 10) + 1;
var c4 = Math.round(Math.random() * 10) + 1;



/*Below will be the basic layout of our game, we will first create a document ready function which will hold our code.
  Once we do this, we will creat on-click functions inside that function which attach to our crystals.
*/

$(document).ready(function() { //This is our document ready function; the code below will not run until the document is loaded


//This will randomly generate a number at the start up which our players will try and reach via the different crystals
var targetNum = Math.round(Math.random() * 100) + 1;
$("#targetNum").text('Target : ' + targetNum);



    $("#c1").on("click", function() {

        guesses += c1;

        $("#guesses").text('Your Guess : ' + guesses);
       
       didTheyWin();

    }); //This ends the #c1 onclick function




    //We need another function for the 2nd crystal which generates a number like the first crystal

    $("#c2").on("click", function() {

        guesses += c2;

        $("#guesses").text('Your Guess : ' + guesses);
        
       didTheyWin();
        

    }); //This closes the #c2 onclick function




    //We will create a third function for the 3rd crystal just like before

    $("#c3").on("click", function() {

        guesses += c3;

        $("#guesses").text('Your Guess : ' + guesses);
       
        didTheyWin();
        

    }); //This closes the #c3 onclick function




    // Now we will create the last function for the last crystal image

    $("#c4").on("click", function() {

        guesses += c4;

        $("#guesses").text('Your Guess : ' + guesses);
        didTheyWin();
       
    }); //This closes the #c4 onclick function



    // Now we must create a function that will tell us whether the player has won or lost

    function didTheyWin() {

    	if (guesses === targetNum) {
    		alert("You saved DragonStone!!! Daenerys thanks you!");
    		wins++;
    		$("#wins").text('Wins : ' + wins);
    		reWriteStats();
    	}

    	else if (guesses > targetNum) {
    		alert("DragonStone has fallen!!!");
    		loss++;
    		$("#losses").text('Losses : ' + loss);
    		reWriteStats();
    	}


	} //This closes the didTheyWin function


	// Now we need one last function; this will be to reWriteStats and start a new game after completion
    function reWriteStats() {

		var guesses = 0;
		var c1 = Math.round(Math.random() * 10) + 1;
		var c2 = Math.round(Math.random() * 10) + 1;
		var c3 = Math.round(Math.random() * 10) + 1;
		var c4 = Math.round(Math.random() * 10) + 1;
		var targetNum = Math.round(Math.random() * 100) + 1;
		$("#guesses").text(guesses);
		$("#targetNum").text('Target : ' + targetNum);
		console.log(reWriteStats);

    };
}); //This is the end of our document ready function