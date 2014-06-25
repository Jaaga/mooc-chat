Template.chatPage.helpers({
chats: function() {
return Messages.find({roomId: this._id});
}
});
