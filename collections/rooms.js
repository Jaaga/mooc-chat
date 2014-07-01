Rooms = new Meteor.Collection('rooms');

Meteor.methods({
room: function(postAttributes) {
// ensure the user is logged in
if (!user)
throw new Meteor.Error(401, "You need to login to post new stories");


// pick out the whitelisted keys
var chat = _.extend(_.pick(chatAttributes, 'name', 'username'), {
userId: user._id,
author: user.username,
submitted: new Date().getTime()
});
var chatId = Chats.insert(chat);
return chatId;
}
});