Router.configure({
  layoutTemplate: 'layout'
});
Router.map(function() { 
	this.route('userProfile', {path: '/createprofile'});
	this.route('createRoom', {path: '/create-new'});
	this.route('roomx1', {path: '/all_rooms'});
	this.route('chatPage', {path: '/rooms/:_id',
	data: function() { return Rooms.findOne(this.params._id); }


})




	
});