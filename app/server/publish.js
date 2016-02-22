Meteor.publish('queries', function () {
  return queries.find({userId: this.userId});
});