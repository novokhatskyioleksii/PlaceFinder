/*****************************************************************************/
/* Results: Event Handlers */
/*****************************************************************************/
Template.Results.events({
});

/*****************************************************************************/
/* Results: Helpers */
/*****************************************************************************/
Template.Results.helpers({
    results: function () {
        return queries.find({userId: Meteor.userId()}, {
            sort: {createdAt: -1}
        }).fetch()[0]
    }
});

/*****************************************************************************/
/* Results: Lifecycle Hooks */
/*****************************************************************************/
Template.Results.onCreated(function () {
});

Template.Results.onRendered(function () {
});

Template.Results.onDestroyed(function () {
});
