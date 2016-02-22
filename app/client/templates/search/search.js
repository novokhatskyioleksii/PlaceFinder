/*****************************************************************************/
/* Search: Event Handlers */
/*****************************************************************************/
Template.Search.events({
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
/* Search: Helpers */
/*****************************************************************************/
Template.Search.helpers({
});

/*****************************************************************************/
/* Search: Lifecycle Hooks */
/*****************************************************************************/
Template.Search.onCreated(function () {
});

Template.Search.onRendered(function () {
});

Template.Search.onDestroyed(function () {
});
