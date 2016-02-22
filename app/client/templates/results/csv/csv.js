/*****************************************************************************/
/* Csv: Event Handlers */
/*****************************************************************************/
Template.Csv.events({
    'click .csv': function () {
        var city = "Kiev";
        var filename = 'kiev_list.csv';
        var fileData = "";
        var records = queries.find({userId: Meteor.userId()}, {
            sort: {createdAt: -1}
        }).fetch()[0].results;
        // remove commas
        var noCommas = function (val) {
            return val.replace(/\,/g,'');
        };
        // build a CSV string. Oversimplified. You'd have to escape quotes and commas.
        records.forEach(function(results) {
            if(results.name) {
                var name = noCommas(results.name);
            }
            if(results.location.address) {
                var address = noCommas(results.location.address);
            } else {
                var address = "";
            }
            fileData += name + "," +
                city + "," +
                address + "," +
                results.location.lat + "," +
                results.location.lng + "\r\n";
        });
        var exportFile = document.createElement('a');
        exportFile.href = 'data:text/csv,' + encodeURI(fileData);
        exportFile.target = '_blank';
        exportFile.download = filename;
        exportFile.click();
    }
});

/*****************************************************************************/
/* Csv: Helpers */
/*****************************************************************************/
Template.Csv.helpers({
});

/*****************************************************************************/
/* Csv: Lifecycle Hooks */
/*****************************************************************************/
Template.Csv.onCreated(function () {
});

Template.Csv.onRendered(function () {
});

Template.Csv.onDestroyed(function () {
});
