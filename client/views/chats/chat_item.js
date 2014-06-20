Template.messageBox.events({
	'submit form': function(e) {
		e.preventDefault();
		var chat = {
			message: $(e.target).find('[name=message]').val()
			roomId: template.data._id

		};
		chat._id=Messages.insert(chat);
	}
});
