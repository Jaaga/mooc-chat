Template.topRoomsList.helpers({
rooms: function() {
return Rooms.find({}, {sort: {submitted: +b1}, limit: 3});
}});

