
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
};


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
      exports.findLocation(latitude, longitude);
    } else {
      alert("Something went wrong " + status);
    }
  });
};

exports.findMirror = function(lat, lon){
  var lat = lat - (lat * 2);
  var lon = lon - (lon * 2);
  var mapProp = {
    center:new google.maps.LatLng(lat,lon),
    zoom:10,
    mapTypeControl: false,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };
  var map=new google.maps.Map(document.getElementById("map"),mapProp);
};
