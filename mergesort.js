function split(wholeArray) {

  /* your code here to define the firstHalf and secondHalf arrays */
  var split = Math.floor(wholeArray.length / 2);
  var firstHalf = wholeArray.slice(0, split);
  var secondHalf = wholeArray.slice(split);

  return [firstHalf, secondHalf];
}

function merge (splitArr) {
  var merged = [];
  var firstArr = splitArr[0];
  var secondArr = splitArr[1];

  while (secondArr.length || firstArr.length) {
    if (firstArr[0] < secondArr[0]) {
      merged.push(firstArr.shift());
    } else {
      merged.push(secondArr.shift());
    }
  }

  return merged;
}

console.log(merge([2, 3, -1], [4, 7, 8]))

// //[1, 4, 2, 7, 11, 3]
// function mergeSort (arr) {

//   var splitArr = split(arr); //[[1, 4, 2], [7, 11, 3, 4]]

//   //while(splitArr[0].length > 1)
//   //splitArr = split()

// }
