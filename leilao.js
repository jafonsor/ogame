// constants
var LICIT_DELAY = 500;  // milliseconds
var LICITATION_LIMIT = 20000;

function playerName() {
  return $("[id='playerName'] > span").html();
}
function actualLicitation() {
  return parseFloat($(".detail_value odd,.currentSum").html());
}
function licitantName() {
  return $("a[class='detail_value odd currentPlayer']").html();
}

function licita() {
  $("[class='value-control max js_sliderMetalMax js_valButton tooltipRight js_hideTipOnMobile']").click();
  $(".pay").click();
}

var keepLicitar = false;
setInterval(
 function() {
   if(keepLicitar) {
     if(licitantName() != playerName()) {
       if(actualLicitation() < LICITATION_LIMIT)
         licita();
     }
   }
 }, 1 );
