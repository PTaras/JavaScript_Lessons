const value = 'c';

if (value === 'a') {
  console.log('a');
} else {
  if (value === 'b' || 'c' || 'd' || 'e') {
    console.log('others');
  } else {
    console.log('unknown');
  }
}