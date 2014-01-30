/*Constants*/

var MATERIAL_CLASSES = [ 'js_sliderMetalMax', 'js_sliderCrystalMax', 'js_sliderDeuteriumMax' ]; //resources to choose based on the indexes below
var METAL = 0;
var CRISTAL = 1;
var DEUTERIUM = 2;
var LICITATION_MATERIAL = METAL; //default material to use in bidding
var LICITATION_LIMIT = 20000; //default max bet
var LICITATION_DELAY = 500;  // milliseconds

/*Auxiliar functions*/

//playerName function - returns the playerName (the one who is running the script) - string
function playerName() {
  return $("[id='playerName'] > span").html().trim();
}

//actualLicitation function - returns the actual licitation present on the page - int
function actualLicitation() {
  return parseInt($(".detail_value odd,.currentSum").html().replace(/\./g,''));
}

//licitantName function - returns the last licitant making a bid - string
function licitantName() {
  return $("a[class='detail_value odd currentPlayer']").html().trim();
}

//bid function - makes a bid in the auction - void
function bid() {
  $("[class='value-control max " + MATERIAL_CLASSES[LICITATION_MATERIAL] + " js_valButton tooltipRight js_hideTipOnMobile']").click();
  $(".pay").click();
}

//startScript function - starts the automatic bidding auction script - void
var loopBid = 0; 
function startScript() {
	loopBid = setInterval(
				 function() {	   
				   if(keepBidding) 
				   {
					 if((licitantName() != playerName()) && (actualLicitation() < LICITATION_LIMIT))
					 {
						 bid();		   
					 }
				   }	   
				 }, LICITATION_DELAY);
}

//stopScript function - stops the automatic bidding auction script - void
function stopScript() {
	if(loopBid !== 0)
	{
		clearInterval(loopBid);
		loopBid = 0;
	}
}


var keepBidding = false;


/*Control/Execution Flow*/
LICITATION_MATERIAL = prompt("Which resource would you like to use to bid? (e.g. METAL, CRISTAL or DEUTERIUM)");
LICITATION_LIMIT = prompt("Till when would you like to keep bidding? (e.g. 1000 for 1.000 resources)");
LICITATION_DELAY = prompt("Choose your licitation time delay (e.g. 500 ms)");

/*se o clock existir 
	espera que o clock chegue a 30 seg do final
  caso contrario
    pergunta se o jogador deseja começar (e fica em ciclo a fazer isto)*/

var toStart = false;
while(!toStart)
{
	toStart = confirm("Would you like to START script?");
}

startScript();

var toStop = false;
while(!toStop)
{
	toStop = confirm("Would you like to STOP script?");
}

stopScript();
