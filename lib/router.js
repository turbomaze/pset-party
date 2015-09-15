Router.configure({
    layoutTemplate: 'layout',
    loadingTemplate: 'loading',
    notFoundTemplate: 'notFound'
});

Router.route('/', {
    name: 'home',
    template: 'groupList',
    waitOn: function() {
        return [Meteor.subscribe('groups')]
    },
    data: function() {
        return {
            groups: Groups.find({}, {
                sort: {
                    createdAt: -1
                }
            })
        };
    }
});

Router.route('/new', {
    name: 'newGroup',
    template: 'newGroup',
    data: function() {
        return {};
    }
});

Router.route('/party/:_id', {
    name: 'groupPage',
    template: 'groupPage',
    waitOn: function() {
        return [Meteor.subscribe('groups')]
    },
    data: function() {
        return Groups.findOne(this.params._id);;
    }
});
