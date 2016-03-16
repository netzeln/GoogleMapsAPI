// var apiKey = require('./../.env').apiKey;
var initMap = require('./../js/map.js').initMap;
var findLocation = require('./../js/map.js').findLocation;
var findMirror = require('./../js/map.js').findMirror;
var locateAddress = require('./../js/map.js').locateAddress;

$(document).ready(function(){
  google.maps.event.addDomListener(window, 'load', initMap);


  $('#getCoord').click(function(){
    var lat = $('input#getLat').val();
    console.log(lat);
    var lon = $('input#getLon').val();
    console.log(lon);
    var locate = findLocation(lat, lon);
    google.maps.event.addDomListener(window, 'load', locate);
  });

  $('#getAddress').click(function(){
    var address = $('input#Address').val();
    var locate = locateAddress(address);
    google.maps.event.addDomListener(window, 'load', locate);
  });



  $('#getMirror').click(function(){
    var lat = $('input#getLat').val();
    console.log(lat);
    var lon = $('input#getLon').val();
    console.log(lon);
    var locate = findMirror(lat, lon);
    google.maps.event.addDomListener(window, 'load', locate);
  });
});
