Router.configure({
  layoutTemplate: 'layout'
});
Router.map(function() { 
	this.route('chatPage', {path: '/'});
	this.route('createRoom', {path: '/create-new'});
	this.route('roomx1', {path: '/all_rooms'});



	
});