"use strict";
const myObj = {
    firstname: 'Maria',
    lastname: 'Müller',
};
console.log(myObj);
class Person {
    constructor(firstname, lastname) {
        // hallo klaus
        this.firstname = firstname;
        this.lastname = lastname;
    }
}
class User extends Person {
    // shortcut für definition von properties und zuweisung
    // constructor(public firstname: string; public lastname: string) {}
    getFullname() {
        // return this.firstname + ' ' + this.lastname;
        return `${this.firstname} ${this.lastname}`;
    }
}
const klaus = new User('Klaus', 'Müller');
console.log(klaus.getFullname());
