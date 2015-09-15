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
