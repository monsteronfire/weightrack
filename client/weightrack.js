if (Meteor.isClient) {
    Template.login.events({
        'click #google-login': function(event){
            Meteor.loginWithGoogle({}, function(err){
                if(err){
                    throw new Meteor.Error('Google login failed');
                }
            });
        },

        'click #logout': function(event){
            Meteor.logout(function(err){
                if(err){
                    throw new Meteor.Error('Logout failed');
                }
            });
        }
    });
}

if (Meteor.isServer) {
    Meteor.startup(function () {
    // code to run on server at startup
    });
}