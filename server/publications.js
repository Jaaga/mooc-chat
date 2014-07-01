Meteor.publish('rooms', function() {
	return Rooms.find();
})
Meteor.publish('chats', function() {
	return Chats.find();
})