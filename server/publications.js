Meteor.publish('rooms', function() {
	return Rooms.find()
})
Meteor.publish('chats', function() {
	return Messages.find({roomId: roomId});
})