// initMap = function(){
// console.log("in initMap function");
// var mapProp = {
//   center: new google.maps.LatLng(45.519685, 122.6777623),
//   zoom: 15,
//   mapTypeId:google.maps.MapTypeId.ROADMAP
// };
//
//  var map = new google.maps.Map(document.getElementById('map'), mapProp);
//   // var map;
//   // map = new google.maps.Map(document.getElementById('map'), {
//   //   center: {lat: 45.519685 , lng:-122.6777623},
//   //   zoom: 15
//   // });
// };
var map;
function initMap() {
  console.log("in initMap");
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: -34.397, lng: 150.644},
    zoom: 8
  });
  console.log(map);
}
