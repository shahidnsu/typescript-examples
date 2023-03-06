type Point = {
  x: number,
  y: number,
}
type User = {
  name: string,
  points: number
}


type Games = Point | User


let game: Games = {
  x: 12,
  y: 23
}
console.log(game)

game = {
  name: 'Shahid',
  points: 12
}
console.log(game)
