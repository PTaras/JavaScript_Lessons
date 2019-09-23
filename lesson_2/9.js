var arr = [1, 2, 3, 4, 5, 6];
for (i = 0; i < arr.length; i++) {
  for (j = 0; j < arr.length; j++) {
    if (arr[i] > arr[j]) {
      var reversedArr = arr[i];
      arr[i] = arr[j];
      arr[j] = reversedArr;
    }
  }
}
console.log(arr);