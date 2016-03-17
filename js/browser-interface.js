// var apiKey = require('./../.env').apiKey;
var initMap = require('./../js/map.js').initMap;
var findLocation = require('./../js/map.js').findLocation;
var findMirror = require('./../js/map.js').findMirror;
var findMirrorHem = require('./../js/map.js').findMirrorHem;
var locateAddress = require('./../js/map.js').locateAddress;
var addSearchBox = require('./../js/map.js').addSearchBox;

$(document).ready(function(){
  google.maps.event.addDomListener(window, 'load', initMap);


  $('#getCoord').click(function(){
    var lat = $('input#getLat').val();

    var lon = $('input#getLon').val();

    var locate = findLocation(lat, lon);
    $('#search').prepend('<input  id="pac-input" class="controls" type="text" placeholder="Search Box">');
    google.maps.event.addDomListener(window, 'load', locate);
  });

  $('#getAddress').click(function(){
    var address = $('input#Address').val();
    var locate = locateAddress(address);

    google.maps.event.addDomListener(window, 'load', locate);
  });


  $('#getMirror').click(function(){
    var lat = $('input#getLat').val();

    var lon = $('input#getLon').val();

    var locate = findMirror(lat, lon);
    $('#search').prepend('<input id="pac-input"  class="controls" type="text" placeholder="Search Box">');
    google.maps.event.addDomListener(window, 'load', locate);
  });

  $('#getMirrorHem').click(function(){
    var lat = $('input#getLat').val();

    var lon = $('input#getLon').val();

    var locate = findMirrorHem(lat, lon);
    $('#search').prepend('<input id="pac-input"  class="controls" type="text" placeholder="Search Box">');
    google.maps.event.addDomListener(window, 'load', locate);
  });
});
