// Given a signed 32-bit integer x, return x with its digits reversed. 
// If reversing x causes the value to go outside the signed 
// 32-bit integer range [-231, 231 - 1], then return 0.

// /**
//  * @param {number} x
//  * @return {number}
//  */

// 1. check if negative number
// if negative, splice after index 0 and set isNegative variable to true
// 2. check if 0
// 3. split into array, reverse
// 4. iterate over array starting from 0th index to first integer > 0,
// splice all leading zeros out
// 5. join array
// 6. if isNegative is true, multiply by -1 
//for (i = 0; i < 5; i++) 