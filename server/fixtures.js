if (Messages.find().count() === 0) {
Messages.insert({
message: 'Meteor',
user: 'Tom Coleman',
});
Messages.insert({
message: 'The Meteor Book',
user: 'Tom Coleman',
});
}
