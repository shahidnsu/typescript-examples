class Person {
  private _age: number;
  private _firstName: string;
  private _lastName: string;
  public get age() {
    return this._age;
  }
  public set age(theAge: number) {
    if (theAge <= 0 || theAge >= 200) {
      throw new Error('The age is invalid')
    }
    this._age = theAge;
  }

  public get firstName() {
    return this._firstName;
  }
  public set firstName(theFirstName: string) {
    if (!theFirstName) {
      throw new Error('Invalid first name')
    }
    this._firstName = theFirstName
  }
  public get lastName() {
    return this._lastName;
  }

  public set lastName(thelastName: string) {
    if (!thelastName) {
      throw new Error('Invalid first name')
    }
    this._lastName = thelastName
  }
  public getFullName(): string {
    return `${this.firstName} ${this.lastName}`
  }
  constructor(age: number, firstName: string, lastName: string) {
    this._age = age;
    this._firstName = firstName;
    this._lastName = lastName
  }
}
let person = new Person(12, 'Shahid', 'Khan')
console.log(person)


