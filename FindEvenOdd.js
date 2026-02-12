function findEvenOdd(val) {
  if(typeof val === 'number') {
    return val%2 === 0;
  }
}

console.log(findEvenOdd(45));
