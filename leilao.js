// constants
var LICIT_DELAY = 500;  // milliseconds
var LICITATION_LIMIT = 20000; //max bet
var MATERIAL_CLASSES = [ 'js_sliderMetalMax', 'js_sliderCrystalMax', 'js_sliderDeuteriumMax' ];
var METAL     = 0;
var CRISTAL   = 1;
var DEUTIRIUM = 2;

//auxiliar functions
function playerName() {
  return $("[id='playerName'] > span").html().trim();
}

function actualLicitation() {
  return parseInt($(".detail_value odd,.currentSum").html().replace(/\./g,''));
}

function licitantName() {
  return $("a[class='detail_value odd currentPlayer']").html().trim();
}

var licitation_material = METAL;
function licita() {
  console.log("[class='value-control max " + MATERIAL_CLASSES[licitation_material] + " js_valButton tooltipRight js_hideTipOnMobile']");
  $("[class='value-control max " + MATERIAL_CLASSES[licitation_material] + " js_valButton tooltipRight js_hideTipOnMobile']").click();
  $(".pay").click();
}

//main function to run - setInterval
var keepLicitar = false;
setInterval(
 function() {
   
   if(keepLicitar) {
     console.log("licitando: " + licitantName() + ", " + playerName());
     if(licitantName() != playerName()) {
       console.log("outro licitou mais alto");
       if(actualLicitation() < LICITATION_LIMIT) {
         console.log(actualLicitation() + ', ' + LICITATION_LIMIT);
         licita();
       }
     }
   }
   
 }, LICIT_DELAY );
