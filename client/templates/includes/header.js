Template.header.helpers({
    username: function() {
        return Meteor.user().username;
    }
});

Template.header.events({
    'click .logout': function(e, tmpl) {
        e.preventDefault();

        Meteor.users.update({_id: Meteor.userId()}, {
            $set: {
                'profile.currentGameRoom': false,
                'profile.leftAt': false
            }
        });
        Meteor.logout();/**
         * Created by anthony on 9/14/15.
         */

    }
});