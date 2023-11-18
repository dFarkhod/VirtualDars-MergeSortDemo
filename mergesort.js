function mergeSort(array) {
    if (array.length <= 1) {
        return array;
    }

    let midIndex = Math.floor(array.length / 2);
    let left = array.slice(0, midIndex);
    let right = array.slice(midIndex);

    let leftSorted = mergeSort(left);
    let rightSorted = mergeSort(right);
    return merge(leftSorted, rightSorted);
  }

  function merge(left, right) {
    let result =[];
    while (left.length && right.length) {
        if (left[0] < right[0]) {
            result.push(left.shift());
        }
        else {
            result.push(right.shift());
        }
    }

    return [...result, ...left, ...right];
  }
  
  const unsortedArray = [7, 2, 1, 5, 3, 9];
  console.log('Tartiblanmagan qator:');
  console.log(unsortedArray);
  const sortedArray = mergeSort(unsortedArray);
  console.log('Tartiblangan qator:');
  console.log(sortedArray);