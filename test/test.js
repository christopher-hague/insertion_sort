var assert = require('assert')
var firstTest = require("../insertionSort.js")

describe("#getMinVal", function() {
  it("should return the element of the least greatest value", function() {
    var arr = [35,17,2,51,7,12]
    assert.equal(firstTest._test.getMinVal(arr), 2)
  })

  it("should remove the element of the least greatest value from the array", function() {
    var arr = [35,17,2,51,7,12]
    var newArr = firstTest._test.getMinVal(arr)
    assert.equal(arr.includes(2), false)
  })
})

describe("#insertionSort", function() {
  it("should sort the array passed as an argument", function() {
    let arr1 = [3, 8, 24, 19]
    let arr2 = [2, 89, 45, 23, 12]
    assert.deepEqual(firstTest._test.insertionSort(arr1), [3,8,19,24])
    assert.deepEqual(firstTest._test.insertionSort(arr2), [2,12,23,45,89])
  })
})
