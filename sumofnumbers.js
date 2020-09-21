function sumFor (num){
  let sum = 0;
  for (let i = 0; i < num.length; i++){
    sum += num[i];
  }
  return sum;
}

function sumWhile (num){
  let sum = 0;
  let count = 0;
  while (count < num.length){
    sum += num[count];
    count++;
  }
  return sum;
}

function sumRecursion (num) {
  if (num.length === 0){
    return 0;
  }
  return num[0] + sumRecursion(num.slice(1));
}

function sumTheSimpleWay (nums) {
  return _.reduce(nums, function (memo, num) { return memo + num; },0);
}

const arrNum = [1, 2, 3, 4, 5, 6];

console.log(sumFor(arrNum));
console.log(sumWhile(arrNum));
console.log(sumRecursion(arrNum));
console.log(sumTheSimpleWay(arrNum));