Rooms = new Meteor.Collection('rooms');

Rooms.allow({
insert: function(userId, doc) {
// only allow posting if you are logged in
return !! userId;
}
});