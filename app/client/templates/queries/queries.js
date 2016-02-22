/*****************************************************************************/
/* Queries: Event Handlers */
/*****************************************************************************/
Template.Queries.events({
    'click .remove': function () {
        queries.remove(this._id);
    }
});

/*****************************************************************************/
/* Queries: Helpers */
/*****************************************************************************/
Template.Queries.helpers({
    queries: function () {
        return queries.find({userId: Meteor.userId()}, {
            sort: {createdAt: 1}
        })
    }
});

/*****************************************************************************/
/* Queries: Lifecycle Hooks */
/*****************************************************************************/
Template.Queries.onCreated(function () {
});

Template.Queries.onRendered(function () {
});

Template.Queries.onDestroyed(function () {
});
