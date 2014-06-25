Messages = new Meteor.Collection('chats');
Meteor.methods({
chat: function(commentAttributes) {
var user = Meteor.user();
var room = Rooms.findOne(commentAttributes.roomId);
// ensure the user is logged in
if (!commentAttributes.body)
throw new Meteor.Error(422, 'Please write some content');

chat = _.extend(_.pick(commentAttributes, 'roomId', 'body'), {
userId: user._id,
author: user.username,
submitted: new Date().getTime()
});
return Messages.insert(chat);
}
});


