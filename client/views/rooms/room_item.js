Template.roomItem.helpers({
ownPost: function() {
return this.userId == Meteor.userId();
}});
