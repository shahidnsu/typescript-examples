class Person {
  constructor(private ssn: string, public firstName: string, readonly birthdate: Date) {
    this.ssn = ssn;
    this.firstName = firstName;
    this.birthdate = birthdate;
  }
  getDetails() {
    console.log(`${this.firstName} birthday is ${this.birthdate}`)
  }
}

