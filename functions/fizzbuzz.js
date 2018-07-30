const fizzBuzz =  (num) => {
  num = parseInt(num, 10);
  let values = [];

  if(num > 100) {
    return -1;
  }

  for(let index = 1; index <= num; index +=1) {
    if(index % 3 === 0 && index % 5 === 0) {
      values.push("fizzbuzz");
    } else if(index % 3 === 0) {
      values.push("fizz");
    } else if(index % 5 === 0) {
      values.push("buzz");
    } else {
      values.push(index);
    }
  }

  return values;
}

const values = fizzBuzz(20);
// console.log(values)
values.map(value => console.log(value))
