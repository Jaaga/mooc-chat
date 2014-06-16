Template.roomList.events({
'submit form': function(e) {
e.preventDefault();
var room = {
title: $(e.target).find('[name=roomname]').val(),
title: $(e.target).find('[name=nickname]').val()

}
room._id = Rooms.insert(room);
Router.go('roomx1', room);


}
});
