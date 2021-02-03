//Given an array of integers and a value, determine if there are any two integers 
// in the array whose sum is equal to the given value. 
// Return true if the sum exists and return false if it does not.

arr = [5,7,1,2,8,4,3]
target1 = 10
target2 = 19

function hasTarget(arr,  target){
	for(let i = 0; i < arr.length;i++){
	    for (let j = 0; j < arr.length;j++){
		    if(i !== j && (arr[i]+arr[j]===target)){
			    return true
            }
        }
    }
return false
}
