var user = {};

user.useravatar = document.getElementbyId('kid');
user.username = document.getElementbyId('username');
var submit = document.getElementbyId('submit');

submit.onclick = function() {
	user._id=Users.insert(user);
}
