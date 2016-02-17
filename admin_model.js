User = require ('./user_model');
Content = require ('./content_model');
users = require ('./user_list');

// Creating admin
function Admin() {
    User.apply(this, arguments)
}
Admin.prototype = Object.create(User.prototype);

var admin = new Admin();

// Delete user content by admin propperty
Admin.prototype.deleteUserContent = function (user, content) {
    var index = user.content.indexOf(content);
    if (index<0){
        console.log ('no content')
    }
    else {
        user.content.splice(index, 1)
    }
};

// Delete user by admin propperty
Admin.prototype.deleteUser = function (user) {
    var index = users.indexOf(user);
    if (index<0){
        console.log ('no such user')
    }
    else {
        users.splice(index, 1);
        user.name = null;
        user.dateOfBirth = null;
        user.geolocation = null;
        user.image = null;
        user.postAdress = null;
        user.email = null;
        user.password = null;
        user.friends = null;
        user.content = null;
    }
};

module.exports = Admin;

//var admin1 = new Admin('Artur', '02.01.1956', 'Turkey', 'ddsees', 'ff44', 'ee@mail.ru', 'qwerty');

//console.log (users);

//admin1.showUser();

//var user1 = new User ('Andriy', '04.06.1922', 'Uzhgorod', 'ddd', 'jj', 'shakaluk@mail.ru', '123');
//var user2 = new User ('Kolya', '05.11.2000', 'Lviv', 'dsfsdf', '88', 'ssd@gmail.com', '234');

//console.log (users);

//admin1.deleteUser(user2);

//user2.showUser();

