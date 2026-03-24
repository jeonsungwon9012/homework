function myMap(arr, callback) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(callback(arr[i], i));
  }
  return result;
}

const result = myMap([1,2,3], function(x) {
  return x * 2;
});
console.log(result);