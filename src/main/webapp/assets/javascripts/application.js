$(document).ready(function () {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(getOrigin);
  } else {
    localStorage.setItem('userOrigin', '')
  }

  function getOrigin(origin) {
    var originLat = origin.coords.latitude;
    var originLong = origin.coords.longitude;

    localStorage['userLat'] = originLat;
    localStorage['userLng'] = originLong;
  }

  var lat, lng, zoom;

  if (typeof localStorage['userLat'] == 'string') {
    lat = localStorage['userLat'];
    lng = localStorage['userLng'];
    zoom = 15
  } else {
    lat = 39.83;
    lng = -98.58;
    zoom = 5
  }
  var token = $('#mainMap').data('maptoken');
  L.mapbox.accessToken = token;

  var map = L.mapbox.map('mainMap', 'mapbox.streets')
    .setView([lat, lng], zoom);

  L.marker([lat, lng]).addTo(map)
});