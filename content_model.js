User = require ('./user_model');
users = require ('./user_list');

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

module.exports = Content;

/*
var user1 = new User ('Andriy', '04.06.1922', 'Uzhgorod', 'ddd', 'jj', 'shakaluk@mail.ru', '123');
var user2 = new User ('Kolya', '05.11.2000', 'Lviv', 'dsfsdf', '88', 'ssd@gmail.com', '234');

user1.showContent();

var cont1 = new Content (user1, 'http://mountains', 'i like mountains');
var cont2 = new Content (user1, 'http://glassofmilk.img', 'i like milk');
var cont3 = new Content (user2, 'http://cows.img', 'i like cows');

user1.deleteContent(cont1);
user2.showContent();
*/


