// export class User { => import { User } from './user';
// export default class User { => import User from './user';
// umbenennung von User in Person
// export class User { => import { User as Person } from './user';
// export default class User { => import Person from './user';
// ACHTUNG ⚠️
// es kann nur 1 default export pro datei geben
export default class User {
    constructor(firstname, lastname) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.age = 42;
    }
    getFullname() {
        return `${this.firstname} ${this.lastname}`;
    }
}
export const userFactory = function (fn, ln) {
    return new User(fn, ln);
};
export const foo = 'foo';
