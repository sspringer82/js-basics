const myObj = {
  firstname: 'Maria',
  lastname: 'Müller',
};

console.log(myObj);

class User {
  firstname: string;
  lastname: string;

  constructor(firstname: string, lastname: string) {
    this.firstname = firstname;
    this.lastname = lastname;
  }

  getFullname() {
    return `${this.firstname} ${this.lastname}`;
    // return this.firstname + ' ' + this.lastname;
  }

  // shortcut für definition von properties und zuweisung
  // constructor(public firstname: string; public lastname: string) {}
}

const klaus = new User('Klaus', 'Müller');
console.log(klaus.getFullname());
