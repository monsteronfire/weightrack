if (Meteor.isClient) {
    Template.login.events({
        'click #facebook-login': function(event){
            Meteor.loginWithFacebook({}, function(err){
                if(err){
                    throw new Meteor.Error('Facebook login failed');
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
