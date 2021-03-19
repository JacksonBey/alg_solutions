/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {
  let index1;
  let index2;
  for(index1 = 0; index1 < nums.length; index1++){
      for(index2 = 1; index2 < nums.length; index2++){
          if(nums[index1] + nums[index2] == target && index1 != index2){
              return [index1, index2]
          }
      }
  }
  
};

// iterate thru array  with num1, index1
// iterate thru array with num2, index2
// see if num1+num2 == target
// if true, put index1 and index2 into an array and return 