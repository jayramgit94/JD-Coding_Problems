function secondLargest(arr) {
  if (arr.length < 2) {
    return null;
  } else arr.sort((a, b) => b - a);
  return arr[1];
}

console.log(
  `the second largest element is ` + secondLargest([1, 2, 34, 5, 7, 7, 0])
); 
