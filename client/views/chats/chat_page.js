Template.chatPage.helpers({
chats: function() {
return Chats.find({roomId: this._id});
}
});
