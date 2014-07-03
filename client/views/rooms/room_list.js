Template.roomsList.helpers({
rooms: function() {
return Rooms.find({}, {sort: {submitted: -1}});
}
});
Template.roomsList.events({
'submit form': function(e) {
e.preventDefault();

var searchString= $(e.target).find('[name=search]').val();
var someCursor = Rooms.find({ title: searchString });
Router.go('roomsList');
}
});
