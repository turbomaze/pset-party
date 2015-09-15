Template.groupList.helpers({

});

Template.groupList.events({
    'submit form': function (e, tmpl) {
        e.preventDefault();

        var kerb = e.target.kerb.value;
        var password = 'v';

        if (!kerb) {
            return Errors.throw('You need to enter a Kerberos.');
        }

        Accounts.createUser({
            username: kerb,
            password: password
        }, function (err1) {
            //'username already exists' error means
            //they might be trying to log in
            if (err1 && err1.error === 403) {
                Meteor.loginWithPassword(kerb, password,
                    function (err2) {
                        if (err2 && err2.error === 403) {
                            return Errors.throw('Username is in use.');
                        } else if (err2) {
                            return Errors.throw(
                                'Error: ' + err2.reason
                            );
                        } else {
                            //successful login
                        }
                    }
                );
            } else if (err1 && err1.error === 400) {
                return Errors.throw(err1.message);
            } else if (err1) {
                return Errors.throw(err1.message);
            } else {
                //successful registration
            }
        });
    }
});