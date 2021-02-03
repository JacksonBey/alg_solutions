//Given a singly linked list, determine if it is a palindrome.

var isPalindrome = function(head) {
    let arr = []
    while (head){
        arr.push(head.val)
        head=head.next
    }
    let i=0
    if(arr.length===1 || (arr.length===2 && arr[0]===arr[1]) || (arr.length===3 && arr[0]===arr[2])){
        return true
    }
    while (i<=arr.length/2){
        if (arr[i] !== arr[arr.length-(i+1)]){
            console.log('i: ', arr[i], '.length-i', arr[arr.length-(i+1)])
            return false
        }
        i++
    }
    return true
};