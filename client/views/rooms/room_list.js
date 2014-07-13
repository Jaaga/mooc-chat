Template.roomsList.helpers({
	rooms: function() {
		return Rooms.find({}, {sort: {submitted: -1}});
	}
});
Template.roomsList.inputIsNotEmpty = function () {
	var searchValue = Session.get('searchVal');
	return searchValue && searchValue.length > 0;
};
Template.roomsList.events({
	'keyup .search-input input': function (e) {
		Session.set('searchVal', $(e.target).val());
	},
	
});



