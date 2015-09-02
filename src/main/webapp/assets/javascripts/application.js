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

    var lat = (typeof localStorage['userLat'] == 'string') ? localStorage['userLat'] : 40;
    var lng = (typeof localStorage['userLng'] == 'string') ? localStorage['userLng'] : -70;

    var token = $('#mainMap').data('maptoken');
    L.mapbox.accessToken = token;

    var map = L.mapbox.map('mainMap', 'mapbox.streets')
        .setView([lat, lng], 15);

    L.marker([lat, lng]).addTo(map)
});