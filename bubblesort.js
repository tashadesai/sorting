function bubbleSort(arr) {
  var counter = 0;

  while (counter < Math.pow(arr.length, 2)) {
  for (var i = 0; i < arr.length; i++) {
    swap(arr[i], arr[i + 1], arr, i);
    counter++
    }
  }

  return arr;
}

function swap(num1, num2, arr, num1index) {
  if (num1 > num2) {
    arr[num1index] = num2;
    arr[num1index + 1] = num1;
  }
}

