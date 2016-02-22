/*****************************************************************************/
/* Venues: Event Handlers */
/*****************************************************************************/
Template.Venues.events({
});

/*****************************************************************************/
/* Venues: Helpers */
/*****************************************************************************/
Template.Venues.helpers({
    results: function () {
        return queries.find({userId: Meteor.userId()}, {
            sort: {createdAt: -1}
        }).fetch()[0]
    }
});

/*****************************************************************************/
/* Venues: Lifecycle Hooks */
/*****************************************************************************/
Template.Venues.onCreated(function () {
});

Template.Venues.onRendered(function () {
});

Template.Venues.onDestroyed(function () {
});
