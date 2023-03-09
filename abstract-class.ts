abstract class Employee {
  constructor(private firstName: string, private lastName: string) { }
  abstract getSalary(): number
  get fullName(): string {
    return `${this.firstName} ${this.lastName}`
  }
  compensationStatement(): string {
    return `${this.fullName} makes ${this.getSalary()} a month`
  }
}
class FullTimeEmployee extends Employee {
  constructor(firstName: string, lastName: string, private salary: number) {
    super(firstName, lastName)

  }
  getSalary(): number {
    return this.salary
  }
}
class PartTime extends Employee {
  constructor(firstName: string, lastName: string, private hours: number, private rate: number) {
    super(firstName, lastName)
  }
  getSalary(): number {
    return this.rate * this.hours
  }
}
let partTimer = new PartTime('Shahid', 'Khan', 12, 12)
console.log(partTimer)
console.log(partTimer.getSalary())

