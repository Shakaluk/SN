// Create new list of users
var users =[];

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
    users.push(this);
};
inherit (User, UserForm);


// Model of user content
var ContentForm = function (user, image, description){
    this.image = image;
    this.description = description;
};

// Creating new content propperty
var Content = function (user, image, description){
    ContentForm.apply(this, arguments);
    user.addContent(this);
};
inherit (Content, ContentForm);

function inherit(Child, Parent){
    Child.prototype = new Parent();
}

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

// Lets registrate 2 users
var user1 = new User ('Andriy', '04.06.1922', 'Uzhgorod', 'ddd', 'jj', 'shakaluk@mail.ru', '123');
var user2 = new User ('Kolya', '05.11.2000', 'Lviv', 'dsfsdf', '88', 'ssd@gmail.com', '234');

//console.log(login('ssd@gmail.com', '234'));

//user1.showFriends();
//user1.addFriend(user2);
//user1.showFriends();

//var cont1 = new Content (user1, 'ss', 'i like mountains');
//var cont2 = new Content (user1, 'http://dsf.img', 'i like milk');
//var cont3 = new Content (user2, 'http://cdfdff.img', 'i like cows');

//user1.deleteContent(cont1);
//user2.showContent();
//console.log(user2.showUser());
//admin.deleteUser(user2);
//console.log(user2.showUser());

var admin1 = new Admin('Artur', '02.01.1956', 'Turkey', 'ddsees', 'ff44', 'ee@mail.ru', 'qwerty');

admin1.showUser();
user2.showUser();
admin1.deleteUser(user2);
user2.showUser();
console.log(users)