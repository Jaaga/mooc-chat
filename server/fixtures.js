if (Rooms.find().count() === 0) {
var now = new Date().getTime();
// create two users
var tomId = Meteor.users.insert({
profile: { name: 'Tom Coleman' }
});
var tom = Meteor.users.findOne(tomId);
var sachaId = Meteor.users.insert({
profile: { name: 'Sacha Greif' }
});
var sacha = Meteor.users.findOne(sachaId);
var telescopeId = Rooms.insert({
title: 'Introducing Telescope',
userId: sacha._id,
author: sacha.profile.name,
submitted: now - 7 * 3600 * 1000
});
Messages.insert({
postId: telescopeId,
userId: tom._id,
author: tom.profile.name,
submitted: now - 5 * 3600 * 1000,
body: 'Interesting project Sacha, can I get involved?'
});
Messages.insert({
postId: telescopeId,
userId: sacha._id,
author: sacha.profile.name,
submitted: now - 3 * 3600 * 1000,
body: 'You sure can Tom!'
});
Rooms.insert({
title: 'Meteor',
userId: tom._id,
author: tom.profile.name,
submitted: now - 10 * 3600 * 1000
});
Rooms.insert({
title: 'The Meteor Book',
userId: tom._id,
author: tom.profile.name,
submitted: now - 12 * 3600 * 1000
});
}
