Router.configure({
  layoutTemplate: 'layout'
});
Router.map(function() { 
	this.route('roomx', {path: '/'});
	this.route('create', {path: '/create-new'});
	this.route('roomx1', {path: '/all_rooms'});
	this.route('chatzone', {
path: '/rooms/:_id',
data: function() { return Posts.findOne(this.params._id); }
});

	
});