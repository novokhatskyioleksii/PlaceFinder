/*****************************************************************************/
/* Map: Event Handlers */
/*****************************************************************************/
Template.Map.events({
});

/*****************************************************************************/
/* Map: Helpers */
/*****************************************************************************/
Template.Map.helpers({
    mapOptionsCurrent: function() {
        var lat = Geolocation.latLng().lat;
        var lng = Geolocation.latLng().lng;
        var zoom = 14;
        GoogleMaps.load();
        if (GoogleMaps.loaded()) {
            return {
                center: new google.maps.LatLng(lat, lng),
                zoom: zoom
            };
        }
    },
    mapOptions: function() {
        GoogleMaps.load();
        var lat = 0;
        var lng = 0;
        var zoom = 1;
        if (GoogleMaps.loaded()) {
            return {
                center: new google.maps.LatLng(lat, lng),
                zoom: zoom
            };
        }
    }
});

/*****************************************************************************/
/* Map: Lifecycle Hooks */
/*****************************************************************************/
Template.Map.onCreated(function () {
        // We can use the `ready` callback to interact with the map API once the map is ready.
        GoogleMaps.ready('map', function(map) {
            // Add a marker to the map once it's ready
            var marker1 = new google.maps.Marker({
                position: {lat: Geolocation.latLng().lat, lng: Geolocation.latLng().lng},
                map: map.instance
            });
        });
});

Template.Map.onRendered(function () {
});

Template.Map.onDestroyed(function () {
});
