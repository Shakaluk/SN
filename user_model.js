Content = require ('./content_model');
users = require ('./user_list');

// Create new list of users
//var users =[];

// User form model
var UserForm = function (name, dateOfBirth, geolocation, image, postAdress, email, password){
    this.name = name;
    this.dateOfBirth = dateOfBirth;
    this.geolocation = geolocation;
    this.image = image;
    this.postAdress = postAdress;
    this.email = email;
    this.password = password;
    this.friends = [];
    this.content = [];
};

// Show user propperty
UserForm.prototype.showUser = function (){
    console.log (this.name, this.dateOfBirth, this.geolocation, this.image, this.postAdress, this.email, this.friends);
};

// Show user email propperty
UserForm.prototype.showMail = function (){
    return this.email;
};

// Show user password propperty
UserForm.prototype.showPass = function (){
    return this.password;
};

// Show user friends propperty
UserForm.prototype.showFriends = function () {
    console.log(this.friends);
};

// Show user content propperty
UserForm.prototype.showContent = function () {
    if (this.content.length > 0) {
        for (var c = 0; c < this.content.length; c++) {
            console.log(this.content[c].image);
            console.log(this.content[c].description);
        }
    }
    else {
        console.log ('no content')
    }
};

// Add friends to user propperty
UserForm.prototype.addFriend = function (friend){
    this.friends.push(friend)
};

// Add user content propperty
UserForm.prototype.addContent = function (content){
    this.content.push(content)
};

// Delete friend of user property
UserForm.prototype.deleteFriend = function (friend){
    var index = this.friends.indexOf(friend);
    if (index<0){
        console.log ('no such friend')
    }
    else {
        this.friends.splice(index, 1)
    }
};

// Delete user content propperty
UserForm.prototype.deleteContent = function (content) {
    var index = this.content.indexOf(content);
    if (index<0){
        console.log ('no content')
    }
    else {
        this.content.splice(index, 1)
    }
};

// Creating new user
var User = function (name, dateOfBirth, geolocation, image, postAdress, email, password){
    UserForm.apply(this, arguments);
    if (this.name) {
        users.push(this);
    };
};
inherit (User, UserForm);

function inherit(Child, Parent){
    Child.prototype = new Parent();
}

// Autorization
var login = function (email, password) {
    for (var e = 0; e < users.length; e++ ){
        if (users[e].showMail() === email) {
            if (users[e].showPass() === password) {
                return true;
            }
            else {
                return ('Wrong password');
            }
        }
    }
    return ('Wrong email');
};

module.exports = User;

/*
var user1 = new User ('Andriy', '04.06.1922', 'Uzhgorod', 'ddd', 'jj', 'shakaluk@mail.ru', '123');
var user2 = new User ('Kolya', '05.11.2000', 'Lviv', 'dsfsdf', '88', 'ssd@gmail.com', '234');

console.log(login('ssd@gmail.com', '234'));

user1.showFriends();
user1.addFriend(user2);
user1.showFriends();
user1.deleteFriend(user2);
user1.showFriends();
*/