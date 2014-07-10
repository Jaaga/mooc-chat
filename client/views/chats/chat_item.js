
Template.messageBox.events({
	'submit form': function(e, template) {
		e.preventDefault();
		var $body = $(e.target).find('[name=body]');
		
		var chat = {
			body: $body.val(),
			roomId: template.data._id,
		};
		
Meteor.call('chat', chat, function(error, chatId) {
if (error){
throwError(error.reason);
} else {
$body.val('');
}
});
}
});


