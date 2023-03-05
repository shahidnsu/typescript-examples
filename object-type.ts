let coordinates: { x: number, y: number } = { x: 34, y: 55 }


function random(coordinates: { x: number, y: number }): { x: number, y: number } {
  return {
    x: Math.random(),
    y: Math.random()
  }

}

const values = { x: 12, y: 23, z: 25 }


console.log(random(values))


console.log(random({ x: 12, y: 5 }))


//type in typescript


type person = {
  name: string,
  age: number,
  email: string
  parentsInfo: { fatherName: string, motherName: string }
}

//type with optional parameter


type threeDPoint = {
  x: number,
  y: number,
  z?: number
}


//readonly in typescript


type employeeId = {
  readonly id: number;
  name: string;
}

const employee: employeeId = {
  id: 121,
  name: 'Shahid'
}
console.log(employee.id)

//employee.id=123


//insterection type


type Sports = {
  name: string,
}
type Cricket = {
  numsOfPlayer: number
}
type Tournament = Sports & Cricket & {
  formatName: string

}
const ipl: Tournament = {
  name: 't-20 legaue',
  numsOfPlayer: 11,
  formatName: 't-20'
}
