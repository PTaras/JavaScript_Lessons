const array = [1, 2, 3, 4];

var sum = 0;

for (var i = 0; i < array.length; i++) {
  sum += array[i % 2];
}

console.log(sum);