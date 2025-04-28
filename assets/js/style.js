class User {
  constructor(_firstName, _lastName, _age, _location) {
    this.firstName = _firstName;
    this.lastName = _lastName;
    this.age = _age;
    this.location = _location;
  }
  compareAge(user) {
    if (this.age > user.age) {
      return this.firstName + " è piu grande " + user.firstName;
    } else if (this.age < user.age) {
      return this.firstName + " è piu piccolo di " + user.firstName;
    } else {
      return "hanno la stessa età";
    }
  }
}
const rossi = new User("Mario", "Rossi", 30, "Veneto");
console.log(rossi);

const verdi = new User("Giuseppe", "Verdi", 40, "Lombardia");
console.log(verdi);

console.log(rossi.compareAge(verdi));
