Router.configure({
	layoutTemplate: 'layout',
	waitOn: function() {
return [Meteor.subscribe('chats'), Meteor.subscribe('rooms')];
}

});
Router.map(function() { 
	this.route('roomsList',{path: '/'});
	this.route('userAvatar', {path: '/createprofile'});
	this.route('createRoom', {path: '/createroom'});

	this.route('chatPage', {
		path: '/rooms/:_id',
		data: function() { return Rooms.findOne(this.params._id); }
	});
	this.route('topRoomsList', {
		path: '/toprooms',
		data: function() { return Rooms.find({}, {sort: {submitted: -1}, limit: 5}); 
	}

	});


});





