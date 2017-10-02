function getMinVal(arr) {
  let minVal = arr[0]
  let minIndex = 0
  for(let i = 0; i < arr.length; i++) {
    let curVal = arr[i]
    if(curVal < minVal) {
      minVal = arr[i]
      minIndex = i
    }
  }
  arr.splice(minIndex, 1)
  return minVal
}

function insertionSort(arr) {
  let sortedArr = []
  while(arr.length > 0) {
    sortedArr.push(getMinVal(arr))
  }
  return sortedArr
}

exports._test = {
  getMinVal: getMinVal,
  insertionSort: insertionSort
}
