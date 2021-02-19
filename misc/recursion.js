// basic recursion
// work in progress



// fibonacci sequence
// 1,1,2,3,5,8,13,21
// function fib(n)
// if number n is 0 or less then return 0 else
// return fib(n)+fib(n-1)


const fib=(num)=>{
    if (num<2){
        return num
    } else {
        return fib(num-1)+fib(num-2)
    }
}

// console.log('0th',fib(1))
// console.log('1th',fib(2))
// console.log('2th',fib(3))
// console.log('3th',fib(4))
// console.log('4th',fib(5))
// console.log('5th',fib(6))
// console.log('6th',fib(7))

// console.log(fib(7))


// excersize 1-7 
// c is any constant greater than or equal to 2
// y and z are any natural number

const c = 2

const multiply=(y,z)=>{
    if (z <= 1){
        return y 
    } else {
        return(multiply(y*c,z/c) + y * (z % c))
    }
}

// console.log(multiply(2,6))