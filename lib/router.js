Router.configure({
	layoutTemplate: 'layout',
	waitOn: function() {
		return Meteor.subscribe('rooms');
	}

});
Router.map(function() { 
	this.route('roomsList',{path: '/'});
	this.route('userProfile', {path: '/createprofile'});

	this.route('createRoom', {path: '/create-new'});

	this.route('roomx1', {path: '/all_rooms'});

	this.route('chatPage', {
		path: '/rooms/:_id',
		data: function() { return Rooms.findOne(this.params._id); }
	});



});





