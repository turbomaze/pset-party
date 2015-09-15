Groups = new Meteor.Collection('groups');

Meteor.methods({
    'addGroup': function(subjects, location) {
        check(Meteor.userId(), String);
        check(subjects, String);
        check(location, String);

        var user = Meteor.user();

        var groupId = Groups.insert({
            subjects: subjects,
            location: location,
            author: user.username,
            authorId: Meteor.userId(),
            createdAt: new Date()
        });

        return {
            _id: groupId
        };
    }
});