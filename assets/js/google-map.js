google.maps.event.addDomListener(window, 'load', init);

function init() {
    var latitud = -8.1032935;
    var longitud = -79.0327228;

    var mapOptions = {
        zoom: 17,
        scrollwheel: false,
        center: new google.maps.LatLng(latitud, longitud)
    };

    var mapElement = document.getElementById('google-map');
    var map = new google.maps.Map(mapElement, mapOptions);
    var marker = new google.maps.Marker({
        position: new google.maps.LatLng(latitud, longitud),
        map: map,
        title: 'BM3 Motos',
        icon: 'assets/images/marker.png',
        animation: google.maps.Animation.BOUNCE
    });
}