// var bikeToken = require('./../.env').bikeToken;
var initMap = require('./../js/map.js').initMap;
var findLocation = require('./../js/map.js').findLocation;
var findMirror = require('./../js/map.js').findMirror;
var findMirrorHem = require('./../js/map.js').findMirrorHem;
var locateAddress = require('./../js/map.js').locateAddress;
var addSearchBox = require('./../js/map.js').addSearchBox;

$(document).ready(function(){

  $('#getBikeThing').click(function(){
    var lat = $('input#getLat').val();

    var lon = $('input#getLon').val();

  $.get("https://bikeindex.org:443/api/v2/bikes_search/stolen?page=1&proximity=" + lat + "%2C%20"+ lon + "&proximity_square=100&access_token=1f75ed78caee48983b97877d1d31d08aa806261127f18ca68f48f4863f3b3c5c").then(function(response) {

    $('#bikeName').text(response.bikes[0].title);
  });
  // console.log(bikes);
    // $('#search').prepend('<input  id="pac-input" class="controls" type="text" placeholder="Search Box">');
    // google.maps.event.addDomListener(window, 'load', locate);
  });
});
