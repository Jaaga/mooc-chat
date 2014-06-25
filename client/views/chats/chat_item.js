/*Template.messageBox1.events({
	'submit form': function(e) {
		e.preventDefault();
		var chat = {
			message = $(e.target).find('[name=message]').val(),
			user = $(e.target).find('[name=username]').val()

		};
		chat._id=Messages.insert(chat);
	}
});*/
Template.messageBox.events({
	'submit form': function(e, template) {
		e.preventDefault();
		var $body = $(e.target).find('[name=body]');
		var $user = $(e.target).find('[name=username]');

		var chat = {
			body: $body.val(),
			roomId: template.data._id,
			user: $user.val()
		};
		
Meteor.call('chat', chat, function(error, commentId) {
if (error){
throwError(error.reason);
} else {
$body.val('');
}
});
}
});


