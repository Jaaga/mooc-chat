Template.chatPage.helpers({
	chats: function() {
		return Messages.find({}, {sort: {submitted: -1}});

	}
});