Template.topRoomsList.helpers({
rooms: function() {
return Rooms.find({}, {sort: {submitted: +1}, limit: 3});
}});

