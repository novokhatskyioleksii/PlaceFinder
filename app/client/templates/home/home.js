/*****************************************************************************/
/* Home: Event Handlers */
/*****************************************************************************/
Template.Home.events({
    'click [data-logout]': function (e, tmpl) {
        Meteor.logout();
    },

    'click [data-login]': function (e, tmpl) {
        Meteor.loginWithGoogle();
    },
    'click .remove': function () {
        queries.remove(this._id);
    },
    'submit form': function (e, tmpl) {
        e.preventDefault();

        var result = tmpl.find('input').value;

        var lat = Geolocation.latLng().lat;
        var lng = Geolocation.latLng().lng;
        var radius = '1km';

        $.get("https://api.foursquare.com/v2/venues/search?" +
            "client_id=Y5A3MIDAMHVGCZT3CGWNCO0TGTSIGEIJPOIWOXHOMXIE5FHF&" +
            "client_secret=JO3CXWNZXNP32ITZRVFCPUBZ2CAYLMXEIPOV5YZQ1HLUA3MP&" +
            "v=20130815&" +
            "ll=" +
            lat +
            "," +
            lng +
            "&radius=1000&" +
            "query=" +
            result,
            function (data) {
                queries.insert({
                    userId: Meteor.userId(),
                    query: result,
                    lat: lat,
                    lng: lng,
                    radius: radius,
                    createdAt: new Date,
                    time: moment().format('MMM DD h:mm'),
                    results: data.response.venues
                });

            });

        tmpl.find('form').reset();
    }
});

/*****************************************************************************/
/* Home: Helpers */
/*****************************************************************************/
Template.Home.helpers({
    queries: function () {
        return queries.find({userId: Meteor.userId()}, {
            sort: {createdAt: 1}
        })
    },
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
    },
    results: function () {
        return queries.find({userId: Meteor.userId()}, {
            sort: {createdAt: -1}
        }).fetch()[0]
    }
});

/*****************************************************************************/
/* Home: Lifecycle Hooks */
/*****************************************************************************/
Template.Home.onCreated(function () {
    // We can use the `ready` callback to interact with the map API once the map is ready.
    GoogleMaps.ready('map', function(map) {
        // Add a marker to the map once it's ready
        var marker1 = new google.maps.Marker({
            position: {lat: Geolocation.latLng().lat, lng: Geolocation.latLng().lng},
            map: map.instance
        });
    });
});

Template.Home.onRendered(function () {
});

Template.Home.onDestroyed(function () {
});
