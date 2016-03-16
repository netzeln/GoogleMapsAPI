// var apiKey = require('./../.env').apiKey;
var initMap = require('./../js/map.js').initMap;
// var findLocation = require('./../js/map.js').findLocation;

$(document).ready(function(){
  google.maps.event.addDomListener(window, 'load', initMap);

  // $.get("https://maps.googleapis.com/maps/api/js?key=" + apiKey + "&callback=initMap").then(function(response) {
  //
  //   };
  // $('#getCoord').click(function(){
  //   var lat = $('input#getLat').val();
  //   var lon = $('input#getLon').val();
  //   var locate = findLocation(lat, lon);
  //   console.log(lat);
  // });
});
