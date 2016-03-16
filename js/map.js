
exports.initMap = function() {
  var lat = 45.519685;
  var lon = -122.6777623;
  var mapProp = {
    center:new google.maps.LatLng(lat,lon),
    zoom:15,
    mapTypeControl: false,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };
  var map=new google.maps.Map(document.getElementById("map"),mapProp);
}


exports.findLocation = function(lat, lon){
  var lat = lat;
  var lon = lon;
  var mapProp = {
    center:new google.maps.LatLng(lat,lon),
    zoom:10,
    mapTypeControl: false,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };
  var map=new google.maps.Map(document.getElementById("map"),mapProp);
  // var lat = lat;
  // var lon = lon;
  // console.log(lat);
  // var mapProp = {
  //   center:new google.maps.LatLng(lat,lon),
  //   zoom:15,
  //   mapTypeControl: false,
  //   mapTypeId: google.maps.MapTypeId.ROADMAP
  // };
  // map = new google.maps.Map(document.getElementById('map'), {
  //   center: {lat: lat, lng: -lon},
  //   zoom: 15
  // });
}

// exports.locateUser = function() {
//   // If the browser supports the Geolocation API
//   if (navigator.geolocation){
//     var positionOptions = {
//       enableHighAccuracy: true,
//       timeout: 10 * 1000 // 10 seconds
//     };
//     navigator.geolocation.getCurrentPosition(geolocationSuccess, geolocationError, positionOptions);
//   }
//   else {
//     alert("Your browser doesn't support the Geolocation API");
//   }
// }
