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



});





