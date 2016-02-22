queries = new Mongo.Collection('queries');


if (Meteor.isServer) {
  queries.allow({
    insert: function (userId, doc) {
      return userId === doc.userId;
    },

    update: function (userId, doc, fieldNames, modifier) {
      return userId === doc.userId;
    },

    remove: function (userId, doc) {
      return userId === doc.userId;
    }
  });
  /*
   queries.deny({
   insert: function (userId, doc) {
   return true;
   },

   update: function (userId, doc, fieldNames, modifier) {
   return true;
   },

   remove: function (userId, doc) {
   return true;
   }
   });
   */
}
