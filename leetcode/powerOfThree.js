// Given an integer n, return true if it is a power of three. 
// Otherwise, return false.
// An integer n is a power of three, 
// if there exists an integer x such that n == 3x.

// input integer n
// return true/false

let n1 = 3 //true
let n2 = 4 // false
let n3 = 177147 // true

const is_power_of_three = (n) => {
    for(let i=1; i<n;i++){
      i *= 3
      if (i === n) return true
    }
    return false
}

console.log('should be: true', is_power_of_three(n1))
console.log('should be: false', is_power_of_three(n2))
console.log('should be: true', is_power_of_three(n3))

