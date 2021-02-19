// given a number n, return the value of the nth iteration of 
// the fibonacci sequence starting for 0, 1.
//input: number
// output: number

// Array index:       0,1,2,3,4,5,6,7 ,8
// Fibonacci numbers: 1,1,2,3,5,8,13,21

//iterative solution

// if n is less than 2 then return 1
//  else starting from prevSum = 1 Sum= 1 add the sums and incriment i 
// till i = n

const fib = (n) => {
    let sum = 1
    let prevsum= 1
    let temp = 0
    let i = 2
    if (n <2) return 1
    while (n !== i){
        temp = sum
        sum = sum + prevsum
        prevsum = temp
        i++
    }
    return sum
}

// console.log('0th',fib(1))
// console.log('1th',fib(2))
// console.log('2th',fib(3))
// console.log('3th',fib(4))
// console.log('4th',fib(5))
// console.log('5th',fib(6))
// console.log('6th',fib(7))

// Constant Time solution
//using golden rule and Binet's Formula

const goldenRatio = (1 + Math.sqrt(5))/2

const binetsFormula = (n) => {
    return ((goldenRatio**n) - (-goldenRatio)**(-n))/Math.sqrt(5)
}

// console.log('0th',binetsFormula(1))
// console.log('1th',binetsFormula(2))
// console.log('2th',binetsFormula(3))
// console.log('3th',binetsFormula(4))
// console.log('4th',binetsFormula(5))
// console.log('5th',binetsFormula(6))
// console.log('6th',binetsFormula(7))

