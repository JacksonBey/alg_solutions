// Given a string s, find the length of the longest substring without repeating characters.

// /**
//  * @param {string} s
//  * @return {number}
//  */

var lengthOfLongestSubstring = function(s) {
  if (s === '') {return 0
  } else if(s.length === 1) {return 1}
  let arr = s.split('')
  let max = 0
  arr.forEach((l,index) => {
      let narr = []
    for (let i =index; i <= arr.length; i++) {
        if (narr.length > max){
          max = narr.length
        }
      if (narr.includes(arr[i])) {
        if (narr.length > max){
          max = narr.length
        } else {
          narr.push(arr[i])
        }
    }
  }})
  return max
};