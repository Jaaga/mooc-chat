Template.userAvatar.events({
	'submit form': function(event) {
		event.preventDefault();
		var data=$(event.target).find('[name=avatar]').val();
		Meteor.users.update({_id:Meteor.user()._id}, {$set:{"profile.avatar": data
	}})
	},

  
});
Template.userAvatar.rendered = function(){

    var element = $(".avatar");
    
	element.click(function () { 
        $(this).addClass("highlighted"); 
    
});
}