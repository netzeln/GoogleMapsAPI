
exports.initMap = function() {
  var mapProp = {
    center:new google.maps.LatLng(45.519685,-122.6777623),
    zoom:15,
    mapTypeControl: false,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };
  var map=new google.maps.Map(document.getElementById("map"),mapProp);
}
  // var map;
//   console.log("in initMap");
//   var map = new google.maps.Map(document.getElementById('map'), {
//     center: {lat: 45.519685, lng: -122.6777623},
//     zoom: 15
//   });
//   console.log(map);
// }

// exports.findLocation = function(lat, lon){
//   var map2;
//   var lat = lat;
//   var lon = lon;
//   map2 = new google.maps.Map(document.getElementById('map2'), {
//     center: {lat: lat, lng: -lon},
//     zoom: 15
//   });
// }
