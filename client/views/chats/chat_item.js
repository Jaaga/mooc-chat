Template.messageBox.events({
	'submit form': function(e) {
		e.preventDefault();
		var chat = {
			message: $(e.target).find('[name=message]').val()

		};
		chat._id=Messages.insert(chat);
	}
});
