
exports.initMap = function(lat, lon) {


 // if (lon === undefined){
 //   lat = 45;
 //   lon = -122;
 // }
  var mapProp = {
    center:new google.maps.LatLng(lat,lon),
    zoom:10,
    mapTypeControl: false,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };
  var map=new google.maps.Map(document.getElementById("map"),mapProp);
  // exports.addSearchBox();

   var input = document.getElementById('pac-input');
   var searchBox = new google.maps.places.SearchBox(input);
   map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

   // Bias the SearchBox results towards current map's viewport.
   map.addListener('bounds_changed', function() {
     searchBox.setBounds(map.getBounds());
   });

   var markers = [];
   // Listen for the event fired when the user selects a prediction and retrieve
   // more details for that place.
   searchBox.addListener('places_changed', function() {
     var places = searchBox.getPlaces();

     if (places.length === 0) {
       return;
     }

     // Clear out the old markers.
     markers.forEach(function(marker) {
       marker.setMap(null);
     });
     markers = [];

     // For each place, get the icon, name and location.
     var bounds = new google.maps.LatLngBounds();
     places.forEach(function(place) {
       var icon = {
         url: place.icon,
         size: new google.maps.Size(71, 71),
         origin: new google.maps.Point(0, 0),
         anchor: new google.maps.Point(17, 34),
         scaledSize: new google.maps.Size(25, 25)
       };

       // Create a marker for each place.
       markers.push(new google.maps.Marker({
         map: map,
         icon: icon,
         title: place.name,
         position: place.geometry.location
       }));

       if (place.geometry.viewport) {
         // Only geocodes have viewport.
         bounds.union(place.geometry.viewport);
       } else {
         bounds.extend(place.geometry.location);
       }
     });
     map.fitBounds(bounds);
   });
};


exports.findLocation = function(lat, lon){
  var lat = lat;
  var lon = lon;
  var mapProp = {
    center:new google.maps.LatLng(lat,lon),
    zoom:8,
    mapTypeControl: false,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };
  exports.initMap(lat, lon);
  // var map=new google.maps.Map(document.getElementById("map"),mapProp);
};

exports.locateAddress = function(address) {
  var geocoder =  new google.maps.Geocoder();
  var latitude = 0;
  var longitude = 0;
  geocoder.geocode( { 'address': address }, function(results, status) {
    if (status == google.maps.GeocoderStatus.OK) {
      latitude = results[0].geometry.location.lat();
      longitude = results[0].geometry.location.lng();
      console.log(latitude);
      console.log(longitude);
      exports.findLocation(latitude, longitude);
    } else {
      alert("Something went wrong " + status);
    }
  });

};

exports.findMirror = function(lat, lon){
  var lat = lat - (lat * 2);
  var lon = lon;
  if(lon <= 0){
    lon  -= -180;
    console.log(lon);
  }else if(lon >0){
    lon -= 180;
    console.log(lon);
  }else{
    lon = 0;
  }

  var mapProp = {
    center:new google.maps.LatLng(lat,lon),
    zoom:8,
    mapTypeControl: false,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };
  // var map=new google.maps.Map(document.getElementById("map"),mapProp);
  exports.initMap(lat, lon);
};

exports.findMirrorHem = function(lat, lon){
  var lat = lat;
  var lon = lon;
  if(lon <= 0){
    lon  -= -180;
    console.log(lon);
  }else if(lon >0){
    lon -= 180;
    console.log(lon);
  }else{
    lon = 0;
  }

  var mapProp = {
    center:new google.maps.LatLng(lat,lon),
    zoom:8,
    mapTypeControl: false,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };
  // var map=new google.maps.Map(document.getElementById("map"),mapProp);
  exports.initMap(lat, lon);
};
// exports.addSearchBox = function() {
//
//   var input = document.getElementById('pac-input');
//   var searchBox = new google.maps.places.SearchBox(input);
//   map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);
//
//   // Bias the SearchBox results towards current map's viewport.
//   map.addListener('bounds_changed', function() {
//     searchBox.setBounds(map.getBounds());
//   });
//
//   var markers = [];
//   // Listen for the event fired when the user selects a prediction and retrieve
//   // more details for that place.
//   searchBox.addListener('places_changed', function() {
//     var places = searchBox.getPlaces();
//
//     if (places.length == 0) {
//       return;
//     }
//
//     // Clear out the old markers.
//     markers.forEach(function(marker) {
//       marker.setMap(null);
//     });
//     markers = [];
//
//     // For each place, get the icon, name and location.
//     var bounds = new google.maps.LatLngBounds();
//     places.forEach(function(place) {
//       var icon = {
//         url: place.icon,
//         size: new google.maps.Size(71, 71),
//         origin: new google.maps.Point(0, 0),
//         anchor: new google.maps.Point(17, 34),
//         scaledSize: new google.maps.Size(25, 25)
//       };
//
//       // Create a marker for each place.
//       markers.push(new google.maps.Marker({
//         map: map,
//         icon: icon,
//         title: place.name,
//         position: place.geometry.location
//       }));
//
//       if (place.geometry.viewport) {
//         // Only geocodes have viewport.
//         bounds.union(place.geometry.viewport);
//       } else {
//         bounds.extend(place.geometry.location);
//       }
//     });
//     map.fitBounds(bounds);
//   });
// };
