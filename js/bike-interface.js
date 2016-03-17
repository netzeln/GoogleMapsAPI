// var bikeToken = require('./../.env').bikeToken;
var initMap = require('./../js/map.js').initMap;
var findLocation = require('./../js/map.js').findLocation;
var findMirror = require('./../js/map.js').findMirror;
var findMirrorHem = require('./../js/map.js').findMirrorHem;
var locateAddress = require('./../js/map.js').locateAddress;
var addSearchBox = require('./../js/map.js').addSearchBox;

$(document).ready(function(){
  $('#bikeThing').hide();
  $('#getBikeThing').click(function(){
    var lat = $('input#getLat').val();

    var lon = $('input#getLon').val();
    $("#bikeName").empty();

  $.get("https://bikeindex.org:443/api/v2/bikes_search/stolen?page=1&proximity=" + lat + "%2C%20"+ lon + "&proximity_square=10&access_token=1f75ed78caee48983b97877d1d31d08aa806261127f18ca68f48f4863f3b3c5c").then(function(response) {
    // response.bikes.date_stolen.sort();
    $('#bikeThing').show();
    for (var i =0; i <= response.bikes.length; i++){
      var date = moment.unix(response.bikes[i].date_stolen).format("MM/DD/YYYY");
      $('#bikeName').append("<li> a " + response.bikes[i].frame_colors + " " + response.bikes[i].title + " stolen from " + response.bikes[i].stolen_location + " on " + date + "</li>");
    }
  });
  // console.log(bikes);
    // $('#search').prepend('<input  id="pac-input" class="controls" type="text" placeholder="Search Box">');
    // google.maps.event.addDomListener(window, 'load', locate);
  });
});
