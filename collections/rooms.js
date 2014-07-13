Rooms = new Meteor.Collection('rooms');

Rooms.allow({
insert: function(userId, doc) {
// only allow posting if you are logged in
return !! userId;
}
});

Meteor.startup(function () {
        // on Client and Server
        EasySearch.createSearchIndex('rooms', {
            'collection'    : Rooms,              // instanceof Meteor.Collection
            'field'         : 'title',    // can also be an array of fields
            'limit'         : 20,                   // default: 10
            'use'           : 'mongo-db'
        });
});
