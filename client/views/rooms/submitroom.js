Template.createRoom.events({
'submit form': function(e) {
e.preventDefault();
var room = {
title: $(e.target).find('[name=roomname]').val(),
author: $(e.target).find('[name=nickname]').val()

}
var roomId = Rooms.insert(room);
Router.go('roomsList',room );
}
});
