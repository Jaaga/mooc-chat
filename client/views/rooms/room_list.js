Template.roomsList.helpers({
rooms: function() {
return Rooms.find({}, {sort: {submitted: -1}});
}
});
