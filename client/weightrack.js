Weights = new Mongo.Collection("weights");

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

    Template.weightlist.helpers({
        weights: function () {
          return Weights.find({});
        }
    });

    Template.weightlist.events({
        'submit .new-weight' : function(event){
            var text = event.target.text.value;

            Weights.insert({
                text: text,
                createdAt: new Date()
            });

            event.target.text.value = '';
            return false;
        }
    });
}

