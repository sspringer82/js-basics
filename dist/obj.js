"use strict";
var myObj = {
    firstname: 'Maria',
    lastname: 'Müller',
};
console.log(myObj);
var User = /** @class */ (function () {
    function User(firstname, lastname) {
        this.firstname = firstname;
        this.lastname = lastname;
    }
    User.prototype.getFullname = function () {
        return this.firstname + " " + this.lastname;
    };
    return User;
}());
var klaus = new User('Klaus', 'Müller');
console.log(klaus.getFullname());
