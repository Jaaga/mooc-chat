Template.signupForm.events({
  "submit #signup-form": function(event, template) {
    event.preventDefault();
    Accounts.createUser({
      email: template.find("#signup-email").value,
      password: template.find("#signup-password").value
      
    }, function(error) {
      if (error) {
        // Display the user creation error to the user however you want
      }
    });
        Router.go('userAvatar');

  }
});

Template.loginForm.events({
  "submit #login-form": function(event, template) {
    event.preventDefault();
    Meteor.loginWithPassword(
      template.find("#login-email").value,
      template.find("#login-password").value,
      function(error) {
        if (error) {
          // Display the login error to the user however you want
        }
      }
    );

  }
});

Template.logoutForm.events({
  "click #logout": function(event, template){
    event.preventDefault();
    Meteor.logout(function(error) {
      if (error) {
        // Display the logout error to the user however you want
      }
    });
  }
});