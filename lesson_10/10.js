const arr = [2, 5, 9, 15, 0, 4];

for (let i = 0; i < arr.length; i++) {
  const current = arr[i];
  if (current > 3) {
    if (current < 10) {  
       console.log(current);
    }   
  }
}
