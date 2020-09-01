const myObj = {
  firstname: 'Maria',
  lastname: 'Müller',
};

myObj.firstname = 'Lotta'; // funktioniert, weil nur Objektreferenz konstant

console.log(myObj);

class Person {
  firstname: string;
  lastname: string;
  age = 42;

  constructor(firstname: string, lastname: string) {
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
