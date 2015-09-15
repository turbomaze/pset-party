Template.newGroup.events({
    'click .next-btn': function(e) {
        e.preventDefault();
        $('#stage-one').hide();
        $('#stage-two').show();
    },

    'click .back-btn': function(e) {
        e.preventDefault();
        $('#stage-one').show();
        $('#stage-two').hide();
    },

    'click .finish-btn': function(e, tmpl) {
        e.preventDefault();

        $('.finish-btn').attr('disabled', 'disabled');

        var subjs = $('#subject-list').val();
        var where = $('#where').val();

        Meteor.call('addGroup', subjs, where, function(err, result) {
            if (err) return console.log(err);

            $('.finish-btn').removeAttr('disabled');

            Router.go('groupPage', result);
        });
    }
});