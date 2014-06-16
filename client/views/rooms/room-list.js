Template.roomList.helpers({
	rooms: function() {
		return Room.find();
	}
})