function getTotal(...numbers: number[]) {
  let total = 0;
  numbers.forEach(element => {
    total += element
  });
  return total
}

console.log(getTotal(10, 20))
