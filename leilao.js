// constants
var LICIT_DELAY = 500;  // milliseconds
var LICITATION_LIMIT = 20000; //max bet

//auxiliar functions
function playerName() {
  return $("[id='playerName'] > span").html().trim();
}

function actualLicitation() {
  return parseFloat($(".detail_value odd,.currentSum").html());
}

function licitantName() {
  return $("a[class='detail_value odd currentPlayer']").html().trim();
}

function licita() {
  $("[class='value-control max js_sliderMetalMax js_valButton tooltipRight js_hideTipOnMobile']").click();
  $(".pay").click();
}

//main function to run - setInterval
var keepLicitar = false;
setInterval(
 function() {

   if(keepLicitar) {
     if(licitantName() != playerName()) {
       if(actualLicitation() < LICITATION_LIMIT)
         licita();
     }
   }
   
 }, LICIT_DELAY );
