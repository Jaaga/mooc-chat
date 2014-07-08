Template.userAvatar.events({
	'submit form': function(event) {
		event.preventDefault();
		var data=Session.get('value');
		var name= $(event.target).find('[name=username]').val();
		Meteor.users.update({_id:Meteor.user()._id}, {$set:{"profile.avatar": data
	}})
		Meteor.users.update({_id:Meteor.user()._id}, {$set:{"profile.username": name
	}})
		Router.go('roomsList');
		
	},

  
});
Template.userAvatar.rendered = function(){

    var element = $(".avatar");
    
	element.click(function () { 
        $(this).addClass("highlighted"); 
        var value = $(this).attr('value');
        Session.set('value', value);
        //$(this).closest("#avatar").val('');
});
}